'use strict';

angular.module('pricingApp')
  .controller('NavbarCtrl', function( $scope, $location, Auth ) {
    $scope.menu = [ {
                      'title' : 'Home',
                      'link'  : '/'
                    },
                    {
                      'title' : 'New Proposal',
                      'link'  : '/newProposal'
                    }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function( route ) {
      return route === $location.path();
    };
  });
