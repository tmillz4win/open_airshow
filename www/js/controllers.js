angular.module('starter.controllers', ['ngSanitize'])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();
  $scope.events2 = Events.plus();
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
  $scope.event2 = Events.get($stateParams.event2Id);
})

.controller('AircraftsCtrl', function($scope, Aircrafts) {
  $scope.aircrafts = Aircrafts.all();
})

.controller('AircraftDetailCtrl', function($scope, $stateParams, Aircrafts) {
  $scope.aircraft = Aircrafts.get($stateParams.aircraftId);
  
  $scope.myHTML = '<a href="http://www.google.com"></a>';
  
  document.onclick = function(e) {
    e = e || window.event;
    var element = e.target || e.srcElement;
    if (element.tagName == 'A') {
      if (element.href.indexOf('http') !== -1) {
        window.open(element.href, '_system', 'location=yes');
        return false;
        }
    }
  }
  
})

.controller('InfoCtrl', function($scope, $ionicLoading) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...',
      noBackdrop: true,
      hideOnStateChange: true,
      duration: 2000
    });
  }
})

.controller('MedCtrl', function($scope) {
})

.controller('VendCtrl', function($scope) {
})

.controller('ContactsCtrl', function($scope) {
})

.controller('SponsorsCtrl', function($scope) {
	$scope.email = function() {
		window.plugins.socialsharing.shareViaEmail(null, null, ['stephanie.kraly@dyess.af.mil'], null, null, null);
	}
})

.controller('MapsCtrl', function($scope, $ionicModal) {
  $scope.navigate = function() {
	//launchnavigator.navigateByPlaceName("Dyess AFB");
	launchnavigator.navigateByLatLon(32.437736, -99.845662);
  }
  
  /*$ionicModal.fromTemplateUrl('templates/modal.html', {
     scope: $scope
     }).then(function(modal) {
       $scope.modal = modal;
     });
  
     $scope.openModal = function() {
       $scope.modal.show()
       //$scope.imgUrl = "http://placekitten.com/g/500/800"
       $scope.imgUrl = 'img/map.png'
     }
     
     $scope.openLayout = function() {
       $scope.modal.show()
       $scope.imgUrl = 'img/layout.png'
     }*/
     
     // Modal 1
    $ionicModal.fromTemplateUrl('modal-1.html', {
      id: '1', // We need to use and ID to identify the modal that is firing the event!
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.oModal1 = modal;
    });
    
    // Modal 2
    $ionicModal.fromTemplateUrl('modal-2.html', {
      id: '2', // We need to use and ID to identify the modal that is firing the event!
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.oModal2 = modal;
    });

    $scope.openModal = function(index) {
      if(index == 1) $scope.oModal1.show();
      else $scope.oModal2.show();
    };
    
    $scope.closeModal = function(index) {
      if(index == 1) $scope.oModal1.hide();
      else $scope.oModal2.hide();
    };

    /* Listen for broadcasted messages */
    
    $scope.$on('modal.shown', function(event, modal) {
      console.log('Modal ' + modal.id + ' is shown!');
    });
    
    $scope.$on('modal.hidden', function(event, modal) {
      console.log('Modal ' + modal.id + ' is hidden!');
    });
    
    // Cleanup the modals when we're done with them (i.e: state change)
    // Angular will broadcast a $destroy event just before tearing down a scope 
    // and removing the scope from its parent.
    $scope.$on('$destroy', function() {
      console.log('Destroying modals...');
      $scope.oModal1.remove();
      $scope.oModal2.remove();
    });
  
})

.controller('PhotoCtrl', function($scope) {
	$scope.socialShare = function() {
		var sharePath = window.localStorage.getItem("sharePath");
		window.plugins.socialsharing.share('#dyessairshow #bigcountryairfest', '#dyessairshow #bigcountryairfest', sharePath);
	}
	$scope.facebook = function() {
		var sharePath = window.localStorage.getItem("sharePath");
		//window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint('#dyessairshow #bigcountryairfest', '#dyessairshow #bigcountryairfest', sharePath);
		window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint('#dyessairshow #bigcountryairfest', sharePath, null /* url */, '"#dyessairshow #bigcountryairfest" copied to clipboard.  Paste it!', function() {console.log('share ok')}, function(errormsg){navigator.notification.alert('You must have the Facebook App installed and configured', callBack, 'Sorry', 'OK')});
	}
	$scope.email = function() {
		var sharePath = window.localStorage.getItem("sharePath");
		window.plugins.socialsharing.shareViaEmail('Check out this picture', 'Dyess Airshow', ['7bwpa@us.af.mil'], null, null, [sharePath]);
	}
})

.controller('NavCtrl', function($scope) {
});