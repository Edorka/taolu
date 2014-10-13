'use strict';

angular.module('taoluApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inscription', {
        url: '/inscription',
        templateUrl: 'app/inscription/inscription.html',
        controller: 'InscriptionCtrl'
      });
  });