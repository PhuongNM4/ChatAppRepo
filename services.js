
angular.module('codeblockServices', [])

.factory('RootDB', function ($firebase, rootUrl) {
    return $firebase(new Firebase(rootUrl));
})
.factory('CssDB', function ($firebase, cssBlockUrl) {
    return $firebase(new Firebase(cssBlockUrl));
})
.factory('JsDB', function ($firebase, jsBlockUrl) {
    return $firebase(new Firebase(jsBlockUrl));
})
