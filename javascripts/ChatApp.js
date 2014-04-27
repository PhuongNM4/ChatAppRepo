
angular.element(document).ready(function () {
    $('.messageText').emotions();
});

var app = angular.module('myApp', ['firebase']);

function MyController($scope, $firebase) {

    var proxy = new Firebase("https://fdn-phuongnm4.firebaseio.com");

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
    return AppendZero(date.getHours()) + ":" + AppendZero(date.getMinutes()) + "...." + AppendZero(date.getDate()) + "-" + AppendZero((date.getMonth() + 1)) + "-" + (date.getYear() + 1900);
}

function AppendZero(input) {
    if (input.toString().length < 2) {
        return "0".concat(input);
    }
    return input;
}
