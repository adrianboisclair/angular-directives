myApp = angular.module('myApp', ['ngSanitize']);

url = 'https://www.googleapis.com/blogger/v3/blogs/7030204873015617672/posts?key=AIzaSyDhWlM0FPbDaKtMbjL-mW8kfWsqZ5Mz6nE';

myApp.factory('myService', function($http) {
   var myService = {
       async: function() {}
   }
});

myApp.controller('myController', function($scope, $http) {
    $scope.titlebar = "title-bar.html";
    $scope.header = "header.html";
    $scope.content = "content.html";
    $scope.main = "main.html";
    $scope.footer = "footer.html";
    $scope.contentTitle ="Adrian\'s Application";
    $scope.contentContents ="This is an AngularJS application.  Application starts; all content is loaded, then displayed as the user navigates around.";

    myApp.service('myService')

        $http.get(url).success(function (res) {
            $scope.myData = res.items;
            console.log(res);
            for (var i = 0; i < res.items.length; i++) {
                console.log(res.items[i].id);
            }
        });
    myApp.filter('unsafe', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    });
});