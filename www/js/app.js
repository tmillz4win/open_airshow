// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services', 'ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    initPushwoosh();
  });
})

.config(function($ionicConfigProvider) {
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.maps', {
      url: '/maps',
      views: {
        'tab-dash': {
          templateUrl: 'templates/maps.html',
          controller: 'MapsCtrl'
        }
      }
    })
    
    .state('tab.aircrafts', {
      url: '/aircrafts',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-aircrafts.html',
          controller: 'AircraftsCtrl'
        }
      }
    })
    
    .state('tab.aircraft-detail', {
      url: '/aircraft/:aircraftId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/aircraft-detail.html',
          controller: 'AircraftDetailCtrl'
        }
      }
    })
    
    .state('tab.photo', {
      url: '/photo',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-photo.html',
          controller: 'PhotoCtrl'
        }
      }
    })

    .state('tab.events', {
      url: '/events',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-events.html',
          controller: 'EventsCtrl'
        }
      }
    })
    
    .state('tab.event-detail', {
      url: '/event/:eventId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/event-detail.html',
          controller: 'EventDetailCtrl'
        }
      }
    })

    .state('tab.info', {
      url: '/info',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-info.html',
          controller: 'InfoCtrl'
        }
      }
    })
    
    .state('tab.contacts', {
      url: '/contacts',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-contacts.html',
          controller: 'ContactsCtrl'
        }
      }
    })
    
    .state('tab.sponsors', {
      url: '/sponsors',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-sponsors.html',
          controller: 'SponsorsCtrl'
        }
      }
    })
    
    .state('tab.medical', {
      url: '/medical',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-medical.html',
          controller: 'MedCtrl'
        }
      }
    })
    
    .state('tab.vendors', {
      url: '/vendors',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-vendors.html',
          controller: 'VendCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
});

