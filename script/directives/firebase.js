//angular.module('directivePractice')
//    .directive('firebaseInput', function () {
//        return {
//            restrict: 'E',
//            templateUrl: '/templates/firebase.html',
//            scope: {
//                lesson: '=', // lesson= "lesson" in index(outside) and {{}}.
//                dayAlert: '&whenClicked', //takes lesson and day as params in tmple
//                clicked: '&'
//            },
//            controller: function ($scope, lessonService) {
//                $scope.getSchedule = lessonService.getSchedule();
//            },
//            link: function (scope, element, attributes) {  //this scope is referencing the same scope as $scope.getSchedule
//                scope.getSchedule.then(function (response) {
//                    scope.schedule = response.data;  //passing $scope.schedule's array of objects which has 2 properties
//                    scope.click = function () {
//                        console.log(element.css('text-decoration'));
//                        if (element.css('text-decoration') === 'none' || element.css('text-decoration') === '') {
//                            element.css('text-decoration', 'line-through')
//                            //element.css('display', 'none')
//                        } else {
//                            element.css('text-decoration', 'none')
//                        }
//                    }
//                    console.log(scope);
//                    //console.log(element);
//                    //console.log(attributes);
//                    scope.schedule.forEach(function (scheduleDay) { //loop through each object in scope.schedule and p
//                        //.forEach passes in each object into the parameter. in the data from the service in json file.
//                        if (scheduleDay.lesson === scope.lesson) {  //takes scope.lesson from lessonCtrl and compares
//                            element.css('text-decoration', 'line-through')
//                            scope.lessonDay = scheduleDay.weekday;
//                            return;
//                        }
//                    });
//                });
//            }
//        }
//    });