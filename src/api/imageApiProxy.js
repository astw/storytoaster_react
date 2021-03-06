import config from './config';

class ImageApiProxy {

  static getImages(imageType, pageNumber, pageSize, theme, tag, photo) {

    let random = false;
    if (pageNumber == undefined || !pageSize) random = true;

    if (!pageNumber) pageNumber = 0;
    if (!pageSize) pageSize = 50;

    let iType = "image";
    if (photo == true) {
      iType = "photo"
    }

    let imageUrl = config.apiRootPath + "mediaServer/" + iType + "?cat=" + imageType + "&pageSize=" + pageSize
      + "&pageNumber=" + pageNumber + "&random=" + random + '&theme=' + theme + '&tag=' + tag;

    let headers = new Headers();
    headers.append('pragma', 'force-cache');
    headers.append('cache-control', 'force-cache');

    let option = {
      method: 'GET',
      headers: headers
    };

    return fetch(imageUrl, {cache: "force-cache"})
      .then(resp => resp.json()) // Transform the data into json
      .then(function (images) {
        images.links = images.links.map((link) => {
          let idx = link.thumb.lastIndexOf("/");
          link.id = link.thumb.substring(idx + 1);
          link.link = config.apiRootPath + link.link;
          link.thumb = config.apiRootPath + link.thumb;

          return link;
        });
        return images;
      })
      .catch(error => {
        throw error;
      });
  }

  static getPropImages(pageNumber, pageSize) {
    return this.getImages('props', pageNumber, pageSize)
      .then(data => data.links);
  }

  static getBackgroundImages(pageNumber, pageSize) {
    return this.getImages('background', pageNumber, pageSize)
      .then(data => {
        return data.links
      });
  }
}

export default ImageApiProxy;
