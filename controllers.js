
angular.module('codeblockControllers', [])

.controller('ListCTRL', function ($scope, $http, $timeout, CssDB, cssBlockUrl) {
    angular.element(document).ready(function () {
        var offset = 200;
        var duration = 300;

        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(duration);
            } else {
                $('.back-to-top').fadeOut(duration);
            }
        });

        jQuery('.back-to-top').click(function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })
    });
    $scope.blocks = CssDB;
})

//CreateController
.controller('CreateCTRL', function ($scope, $location, $timeout, CssDB) {
    $scope.editMode = true;

    $scope.saveBlock = function () {
        $scope.block.time = GetDateTimeNow();
        CssDB.$add($scope.block, function () {
            $timeout(function () {
                $location.path('/');
            });
        });
    };
})

//EditController
.controller('ViewCTRL', function ($scope, $location, $routeParams, $firebase, cssBlockUrl) {
    cssBlockUrl = cssBlockUrl + $routeParams.blockId;
    $scope.block = $firebase(new Firebase(cssBlockUrl));

    $scope.destroy = function () {
        $scope.block.$remove();
        $location.path('/');
    };

    $scope.saveBlock = function () {
        $scope.block.$save();
        $location.path('/');
    };

});
