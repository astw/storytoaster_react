import fabric from "fabric"; 
"use strict";

fabric.StoryTextbox = fabric.util.createClass(fabric.Textbox, {

    type: 'storyTextbox',
    src: '',

    flipH: false,
    flipV: false,

    initialize: function (text, options) {

      var atext = "Story text                                                                    \n\n\n \n";
      text = text && text !="Story text" ? text : atext;

      options || (options = {left: 40, top: 40});

      //this.width = options.width > 568 ? options.width : 568;
      //this.height = options.height > 356 ? options.height : 356;

      var thisTextObject = this;
      Object.getOwnPropertyNames(options).forEach(
        function (prop) {
          thisTextObject[prop] = options[prop];
        }
      );

      this.left = options.left >40 ? options.left : 40;
      this.top = options.top > 40 ? options.top : 48;

      this.callSuper('initialize', text);
      //this.fontSize = options.fontSize;

      this.image = new Image();
      this.image.crossOrigin = "Anonymous";
      this.image.src = options.src;

      this.image.width =  options.imgWidth ? options.imgWidth : this.width ;
      this.image.height = options.imgHeight ? options.imgHeight : this.height ;

      this.image.onload = (function () {
        this.loaded = true;
        this.setCoords(); 
        this.fire('image:loaded');
        if (this.canvas)
          this.canvas.renderAll();
      }).bind(this)
    },

    toObject: function () {
      return fabric.util.object.extend(this.callSuper('toObject'), {
        label: this.get('label'),
        src: this.image.src,
        imgWidth:this.image.width,
        imgHeight:this.image.height
      });
    },

    _render: function (ctx) {
      if (this.loaded) {
        //   ctx.drawImage(this.image, -this.width / 2 - 20, -this.height / 2 - 10, this.width + 40, this.height + 40);

        var scaleX =  1, // Set horizontal scale to -1 if flip horizontal
          scaleY = 1, // Set verical scale to -1 if flip vertical
          posX = 0, // Set x position to -100% if flip horizontal
          posY = 0; // Set y position to -100% if flip vertical

        ctx.save(); // Save the current state
        ctx.scale(scaleX, scaleY); // Set scale to flip the image

        ctx.drawImage(this.image, posX - this.width / 2, posY - this.height / 2, this.width, this.height); // draw the image
        ctx.restore(); // Restore the last saved state
      }

      this.callSuper('_render', ctx);
    }
  });

  fabric.StoryTextbox.fromObject = function (object) {
     var instance = new fabric.StoryTextbox(object.text, fabric.util.object.clone(object), function () {
      return instance && instance.canvas && instance.canvas.renderAll();
    });
    return instance;
  };


fabric.StoryToasterIText = fabric.util.createClass(fabric.IText, {
    
    type: 'storyToasterIText',
    id: '',
    initialize: function (text, options) {
        debugger;
        var thisTextObject = this;

        Object.getOwnPropertyNames(options).forEach(
            function (prop) {
                thisTextObject[prop] = options[prop];
            }
        );

        this.callSuper('initialize', text);
    },
    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            label: this.get('label'),
            id: this.id
        });
    },
    _render: function (ctx) {
        this.callSuper('_render', ctx);
    }
});

fabric.StoryToasterIText.fromObject = function (object) {
    debugger;
    var instance = new fabric.StoryToasterIText(object.text, fabric.util.object.clone(object), function () {
        return instance && instance.canvas && instance.canvas.renderAll();
    });
    return instance;
};

//---  StoryToasterImage

fabric.StoryToasterImage = fabric.util.createClass(fabric.Image, {

    type: 'storyToasterImage',
    name: '',
    initialize: function (element, options) {
      this.callSuper('initialize', element, options);
      options && this.set('name', options.name);
    },

    // _render: function(ctx) {
    //     this.callSuper('_render', ctx);
    // },

    toObject: function () {
      return fabric.util.object.extend(this.callSuper('toObject'), {
        name: this.name
      });
    }
  });

  fabric.StoryToasterImage.fromObject = function (object) {
    var instance = new fabric.StoryToasterImage(object, fabric.util.object.clone(object), function () {
      return instance && instance.canvas && instance.canvas.renderAll();
    });
    return instance;
  };

  fabric.StoryToasterImage.fromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
      callback(new fabric.StoryToasterImage(img, imgOptions));
    }, {crossOrigin: 'Anonymous'}, imgOptions && imgOptions.crossOrigin);
  };
  //------------
  
  fabric.ImageTextbox = fabric.util.createClass(fabric.IText, {

    //var ImageTextbox = fabric.util.createClass(fabric.Textbox, {
    ///http://stackoverflow.com/questions/10009080/interactive-text-fields-with-fabric-js
    
        type: 'imageTextbox',
        src: '',
    
        id:'',
        extFlipH:false,
        extFlipV:false,
    
        initialize: function (text, options) {
          options || (options = {left:30, top:20});
    
          var thisTextObject = this;
    
          Object.getOwnPropertyNames(options).forEach(
                  function (prop) {
                    thisTextObject[prop] = options[prop];
                  }
          );
          this.left = options.left ? options.left: 30;
          this.top = options.top ? options.top:20;
          this.extFlipH = options.extFlipH;
          this.extFlipV = options.extFlipV;
    
          this.callSuper('initialize', text);
    
          this.image = new Image();
          this.image.crossOrigin = "anonymous";
          this.image.src = options.src;
          this.image.width = options.imgWidth ? options.imgWidth : 68;
          this.image.height = options.imgHeight ? options.imgHeight : 51;
          this.width = options.width? options.width:68;
          this.height = options.height? options.height:51;
    
          this.image.onload = (function () {
            this.loaded = true;
            this.setCoords();
            this.fire('image:loaded');
            if(this.canvas)
              this.canvas.renderAll();
          }).bind(this);
        },
    
        toObject: function () {
          this.image.flipX = this.extFlipH;
          this.image.flipY = this.extFlipV;
    
           return fabric.util.object.extend(this.callSuper('toObject'), {
            label: this.get('label'),
            src: this.image.src,
            id:this.id,
            extFlipH:this.extFlipH,
            extFlipV:this.extFlipV,
            imgWidth:this.image.width,
            imgHeight:this.image.height,
            width:this.width,
            height:this.height
          });
        },
    
        _render: function (ctx) {
          if (this.loaded) {
            //   ctx.drawImage(this.image, -this.width / 2 - 20, -this.height / 2 - 10, this.width + 40, this.height + 40);
    
            //this.flipH = true;
            //this.flipV = true;
    
            this.image.flipX = this.extFlipH;
            this.image.flipY = this.extFlipV;
    
            var scaleX = this.extFlipH ? -1 : 1, // Set horizontal scale to -1 if flip horizontal
              scaleY = this.extFlipV ? -1 : 1, // Set verical scale to -1 if flip vertical
              posX = this.extFlipH ? this.width * -1 : 0, // Set x position to -100% if flip horizontal
              posY = this.extFlipV ? this.height * -1 : 0; // Set y position to -100% if flip vertical
    
            if (this.extFlipH) {
                posX = this.extFlipH ? this.width / 2 * -1 : 0, // Set x position to -100% if flip horizontal
                posY = this.extFlipV ? this.height / 2 * -1 : 0; // Set y position to -100% if flip vertical
            }
    
            if(this.extFlipV){
              posY += this.height/2 + 10;
            }
    
            ctx.save(); // Save the current state
            ctx.scale(scaleX, scaleY); // Set scale to flip the image
            if (this.extFlipH) {
              ctx.drawImage(this.image, posX - 20, posY - this.height / 2 - 10, this.width + 40, this.height + 40); // draw the image
            }
            else {
              ctx.drawImage(this.image, posX - this.width / 2 - 20, posY - this.height / 2 - 10, this.width + 40, this.height + 40); // draw the image
            }
    
            //ctx.drawImage(img, posX -20, posY - 10, this.width + 40, this.height + 40); // draw the image
            ctx.restore(); // Restore the last saved state
            //ctx.drawImage(this.image, -this.width / 2 - 20, -this.height / 2 - 10, this.width + 40, this.height + 40);
          }
    
          this.callSuper('_render', ctx);
        }
      });
    
      fabric.ImageTextbox.fromObject = function (object) {
        var instance = new fabric.ImageTextbox(object.text, fabric.util.object.clone(object), function () {
          return instance && instance.canvas && instance.canvas.renderAll();
        });
        return instance;
      };

  //
export default this;