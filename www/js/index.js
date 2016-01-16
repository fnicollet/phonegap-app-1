var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        // Ignore back button in android
        // document.addEventListener('backbutton', function() {}, false);
        var loading = document.getElementById("loading");
        loading.setAttribute('style', 'display:none;');
        var iframeComponent = document.getElementById("iframeComponent");
        iframeComponent.setAttribute('style', 'display:"";');
        
    }
};
