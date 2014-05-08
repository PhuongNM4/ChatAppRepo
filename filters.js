
angular.module('codeblockFilters', []).filter('splitTags', function () {

    return function (input) {

        debugger

        var arrStr = input.split(',');
        var returnStr = "";
        for (var i = 0; i < arrStr.length; i++) {
            returnStr = returnStr + '<code>' + arrStr[i] + '</code>';
        }
        return returnStr;
    };
})



