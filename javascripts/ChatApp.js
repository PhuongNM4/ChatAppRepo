
var NUMBER_OF_MESSAGE = 5;
var proxy = new Firebase("https://fdn-phuongnm4.firebaseio.com");
var filteredData = proxy.limit(NUMBER_OF_MESSAGE);

angular.module('myApp', ['firebase'])
    .filter('orderObjectBy', function () {
        return function (items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function (item) {
                filtered.push(item);
            });
            filtered.sort(function (a, b) {
                return (a[field] > b[field]);
            });
            if (reverse) filtered.reverse();
            return filtered;
        };
    })
    .filter('trimLength', function () {
        return function (item) {
            if (item.length > 10) {
                item = item.substr(0, 8) + "..";
            }
            return item;
        };
    });

function MyController($scope, $firebase) {

    angular.element(document).ready(function () {
        var offset = 220;
        var duration = 500;
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.back-to-top').fadeIn(duration);
            } else {
                jQuery('.back-to-top').fadeOut(duration);
            }
        });

        jQuery('.back-to-top').click(function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })
    });

    $scope.showId = false;
    $scope.disableName = false;
    $scope.messages = $firebase(proxy);
    
    $scope.addMessage = function (e) {

        if (e.keyCode != 13) return;

        if (!$scope.disableName && $scope.name != "") {
            $scope.disableName = true;
        }
        $scope.timestamp = GetDateTimeNow();
        var newId = $('.messageText').length + 1;

        $scope.messages.$add({
            id: newId,
            from: $scope.name,
            body: $scope.msg,
            timestamp: $scope.timestamp
        });

        $scope.msg = "";
    };
}

function GetDateTimeNow() {
    var date = new Date();
    return AppendZero(date.getHours()) + ":" + AppendZero(date.getMinutes()) + "  " + AppendZero(date.getDate()) + "-" + AppendZero((date.getMonth() + 1)) + "-" + (date.getYear() + 1900);
}

function AppendZero(input) {
    if (input.toString().length < 2) {
        return "0".concat(input);
    }
    return input;
}

