import config from './config';

class BookApiProxy {

    static getBooks(count, mode = 'random') {
        if (!count) {
            count = 10;
        }

        let url = `${config.apiRootPath}books/?count=${count}&mode=${mode}`;
        let option = {
            cache: 'force-cache'
        }
        return fetch(url, option)
            .then(resp => resp.json());
    }
}

export default BookApiProxy;