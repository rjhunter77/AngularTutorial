'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Apple iPhone 6',
     'snippet': 'In 4.7-inch and 5.5-inch sizes.'},
    {'name': 'BlackBerry Passport',
     'snippet': 'total Hail-Mary pass of a phone that has a big 4.5-inch, square, 1,440-by-1,440 display and a full hardware keyboard.'},
    {'name': 'Nokia Lumia 730',
     'snippet': 'comes disguised as a "selfie phone", one with a powerful, 5-megapixel front shooter with a wide-angle lens for better looking selfies.'}
  ];
});
