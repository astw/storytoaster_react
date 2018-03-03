(function(global) {

  // used as the textbox

  "use strict";
  fabric.StoryToasterIText = fabric.util.createClass(fabric.IText, {

    type: 'storyToasterIText',
    id: '',
    initialize: function (text, options) {

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
    var instance = new fabric.StoryToasterIText(object.text, fabric.util.object.clone(object), function () {
      return instance && instance.canvas && instance.canvas.renderAll();
    }); 
    console.log('.... load finished')
    return instance;
  };
  
})( typeof exports != 'undefined' ? exports : this);

