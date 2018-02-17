// Var app es quien inicializa la aplicacién de angular
var myApp = angular.module('myApp', [ 'ngAnimate', 'ksSwiper',]);


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

});


myApp.controller('MyController02', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});

myApp.controller('MyCtrl', function($scope) {
    $scope.value = 'one';
    $scope.values = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

    $scope.changedSlide = function(idx) {
        $scope.value = $scope.values[idx];
    };

    $scope.scrolledTo = function(idx) {
        if(idx != $scope.values.indexOf($scope.value)) {
            console.log(idx);
            $scope.value = $scope.values[idx];
        }
    };
});

myApp.directive('swiper', function() {
    function main(scope, element, attrs) {
        var swiper = new Swiper(element.get(0), {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 0,
            slideToClickedSlide: true,
            // Events
            onSlideChangeStart: function(sw) {
                scope.onSlideChange({
                    '$index': sw.activeIndex,
                    '$swiper': sw
                });
                scope.$apply();
            }
        });
    }

    return {
        link: main,
        scope: {
            onSlideChange: '&onSlideChange'
        }
    };
});




// myApp.controller('expandCollapseCtrl', function ($scope) {
//         $scope.active = true;
//         $scope.active1 = true;
//         $scope.active2 = true;
//         $scope.active3 = true;
//         $scope.active4 = true;
//
// });


myApp.controller('expandCollapseCtrl', function ($scope) {
        $scope.active1 = false;
        $scope.active2 = false;
        $scope.active3 = false;
        $scope.active4 = false;
        $scope.active5 = false;

        $scope.toggle1 = function(){
          if(!$scope.active1){
            $scope.active1 = true;
            $scope.active2 = false;
            $scope.active3 = false;
            $scope.active4 = false;
            $scope.active5 = false;
          }else{
            $scope.active1 = false;
          }
        };

        $scope.toggle2 = function(){
          if(!$scope.active2){
            $scope.active2 = true;
            $scope.active1 = false;
            $scope.active3 = false;
            $scope.active4 = false;
            $scope.active5 = false;
          }else{
            $scope.active2 = false;
          }
        };
        $scope.toggle3 = function(){
          if(!$scope.active3){
            $scope.active3 = true;
            $scope.active1 = false;
            $scope.active2 = false;
            $scope.active4 = false;
            $scope.active5 = false;
          }else{
            $scope.active3 = false;
          }
        };
        $scope.toggle4 = function(){
          if(!$scope.active4){
            $scope.active4 = true;
            $scope.active1 = false;
            $scope.active2 = false;
            $scope.active3 = false;
            $scope.active5 = false;
          }else{
            $scope.active4 = false;
          }
        };
        $scope.toggle5 = function(){
          if(!$scope.active5){
            $scope.active5 = true;
            $scope.active1 = false;
            $scope.active2 = false;
            $scope.active3 = false;
            $scope.active4 = false;
          }else{
            $scope.active5 = false;
          }
        };

});


myApp.controller('slide01', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.noticiasRecomendadas = {
    slidesPerView: 3,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',

    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
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

myApp.controller('expandCollapseCtrlMenu', function ($scope) {
        $scope.activeM = true;

});
