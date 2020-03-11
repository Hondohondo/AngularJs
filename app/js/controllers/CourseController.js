'use strict';

// controllers are responsible for creating scope
//the scope populate the content that's going to be needed by the view
courseApp.controller('CourseController',
    function CourseController($scope) {
    $scope.course = {
            name: "AngularJs Course",
            id: 1,
            date: "January 2020",
            location: {
                address: 'PluralSight Website',
                where: 'AngularJS Path'
            },
            imageUrl: 'img/angular.png'
        }
    }
);