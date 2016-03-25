var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
    	document.getElementById("debugDiv").innerHTML = "onDeviceReady";
            window.addEventListener("message", function(event) {
	document.getElementById("debugDiv").innerHTML = "on message";
	    
		var data = event.data;
		var action = data.action;
		document.getElementById("debugDiv").innerHTML += action;
		if(action == "LINK") {
			var parameters = data.parameters;
			var href = parameters[0];
			document.getElementById("debugDiv").innerHTML += href;
			window.open(href, "_system");
		}
	}, false);
    	
        app.receivedEvent('deviceready');
        // http://docs.phonegap.com/en/2.5.0/cordova_splashscreen_splashscreen.md.html#hide
        navigator.splashscreen.hide();
        // Ignore back button in android
        // document.addEventListener('backbutton', function() {}, false);
         document.getElementById("debugDiv").innerHTML = "TEST";

    }
};
