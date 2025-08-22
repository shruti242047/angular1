//Define Angular Js app
var app = angular.module("studentApp",[]);

//Define Controller
app.controller("StudentController",function ($scope) {
    $scope.student = {
        name:"Shruti Shirke",
        roll:"23",
        course:"Computer Science"
    };
});