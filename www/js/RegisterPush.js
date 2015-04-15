// JavaScript Document
function init() {
    document.addEventListener("deviceready", initPushwoosh, true);
 
    /*document.addEventListener('push-notification', function(event) {
		var title = event.notification.title;
		var userData = event.notification.userdata;
 
		console.warn('user data: ' + JSON.stringify(userData));
		alert(title);
	});*/
}

function initPushwoosh() {
    var pushNotification = window.plugins.pushNotification;
    
    if (device.platform == 'android' || device.platform == 'Android') {
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        alert(title);
    });
 
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_NUMBER", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "000000000000", appid : "00000-00000" });
 
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
	} else  {
		//set push notification callback before we initialize the plugin
    document.addEventListener('push-notification', function(event) {
                                //get the notification payload
                                var notification = event.notification;
 
                                //display alert to the user for example
                                alert(notification.aps.alert);
                               
                                //clear the app badge
                                pushNotification.setApplicationIconBadgeNumber(0);
                            });
 
    //initialize the plugin
    pushNotification.onDeviceReady({pw_appid:"12FEA-5F51A"});
     
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var deviceToken = status['deviceToken'];
            console.warn('registerDevice: ' + deviceToken);
        },
        function(status) {
            console.warn('failed to register : ' + JSON.stringify(status));
        }
    );
     
    //reset badges on app start
    pushNotification.setApplicationIconBadgeNumber(0);
	}
}