// Var app es quien inicializa la aplicacién de angular
var myApp = angular.module('myApp', ['ngMaterial', 'ngMessages',  'ngAnimate', 'ksSwiper',]);


// controlador menu
myApp.controller('menuCrtl', function($scope) {
  $scope.activo = [];
  $scope.visible = [];
  $scope.mouseOver = function(position) {
    $scope.activo[position] = "activo-menuPrivado";
    $scope.visible[position] = true;
  };

  $scope.mouseLeave = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
    $scope.isActive = false;
  };
  $scope.mouseClick = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  };
  $scope.isActive = false;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive;
  };
  $scope.isActive2 = false;
  $scope.activeButton2 = function() {
    $scope.isActive2 = !$scope.isActive2;
  };
  $scope.isActive3 = false;
  $scope.activeButton3 = function() {
    $scope.isActive3 = !$scope.isActive3;
  };
  $scope.isActive4 = false;
  $scope.activeButton4 = function() {
    $scope.isActive4 = !$scope.isActive4;
  };
  $scope.isActive5 = false;
  $scope.activeButton5 = function() {
    $scope.isActive5 = !$scope.isActive5;
  };

  // controlador menu

});
// Slider Noticias recomendadas
myApp.controller('sliderNoticiasRecomendadas', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.noticiasRecomendadas = {
    slidesPerView: 4,
   spaceBetween: 30,
   centeredSlides: true,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      991: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider Noticias recomendadas
