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
            imageUrl: 'img/angular.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and projects',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes!',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Ami Amigo',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything Angular!',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }

);