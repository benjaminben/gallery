(function() {
'use strict';

angular.module('gallery')
  .controller('GalleryController', GalleryController);

GalleryController.$inject = ['Install'];

function GalleryController(Install) {
  var vm = this;
  vm.message = "HI WORLD HOW ARE YOU?";
}

})();
