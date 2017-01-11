//Jquery
$('document').ready(function () {
    $('.slider-carousel').slick({
        autoplay: true,
        dots: true,
        arrows: false
    });

    // $("#owl-demo").owlCarousel({
    //
    //     navigation : true, // Show next and prev buttons
    //     slideSpeed : 300,
    //     paginationSpeed : 400,
    //     items: 1
    //
    //     // "singleItem:true" is a shortcut for:
    //     // items : 1,
    //     // itemsDesktop : false,
    //     // itemsDesktopSmall : false,
    //     // itemsTablet: false,
    //     // itemsMobile : false
    //
    // });
});

//AngularJS
angular.module('mainApp',[])
    .controller('mainCtrl', function($scope){
        $scope.W = 'world';
        $scope.time_zone = 'GMT +8';
        $scope.time_format = 'yyyy-MM-d hh:mm:ss';

    })
    .directive("getCurrentTime", function(dateFilter) {
        return function (scope, element, attrs) {
            var format;

            scope.$watch(attrs.getCurrentTime, function (value) {
                format = value;
                updateTime();
            });

            function updateTime() {
                var dt = dateFilter(new Date(), format);
                element.text(dt);
            }

            function updateLater() {
                setTimeout(function () {
                    updateTime(); // update DOM
                    updateLater(); // schedule another update
                }, 1000);
            }

            updateLater();
        }
    });
