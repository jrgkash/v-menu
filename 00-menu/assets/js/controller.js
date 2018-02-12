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
