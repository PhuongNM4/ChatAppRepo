
angular.module('codeblock', [
    'ngRoute',
    'firebase',
    //'cgBusy',
    //'ngAnimate',
    'codeblockServices',
    'codeblockControllers',
    'codeblockDirectives',
    'codeblockFilters',
])
.value('cssBlockUrl', 'https://fdn-freestore.firebaseio.com/Code%20Blocks/CSS/')

.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        controller: 'ListCTRL',
        templateUrl: 'partials/list.html'
    }).
    when('/view/:blockId', {
        controller: 'ViewCTRL',
        templateUrl: 'partials/detail.html'
    }).
    when('/new', {
        controller: 'CreateCTRL',
        templateUrl: 'partials/detail.html'
    }).
    otherwise({
        redirectTo: '/'
    })
})



