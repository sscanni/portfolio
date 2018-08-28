
(function() {  

    var app = angular.module("githubViewer", []);

    var MainController = function ($scope) {

        var person = {
            firstName: "Steven",
            lastName: "Scanniello",
            imageSrc: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/c99.3.762.762/s160x160/971135_10200288602961249_1612494518_n.jpg?_nc_cat=0&oh=4a95287fbc1564e6dd4103e7d17fff68&oe=5BFCE487"
        };
        $scope.message = "Hello, Angular!";
        $scope.person = person;
    };

    app.controller("MainController", MainController);
}());
