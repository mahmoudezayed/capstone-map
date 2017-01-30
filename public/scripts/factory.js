(function() {
    'use strict';

    angular.module('capstone')
    .factory('Flash', function($rootScope, $timeout){
        return {
            show: function(type, message){
            	$rootScope.flashType = type;
                $rootScope.flashMsg = message;
                $timeout(function () {
                	$rootScope.flashType = '';
                	$rootScope.flashMsg = '';
                }, 3000, 1);
            }
        };
    });
})();