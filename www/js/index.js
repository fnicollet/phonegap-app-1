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
        app.receivedEvent('deviceready');
        // Ignore back button in android
        // document.addEventListener('backbutton', function() {}, false);
        var loading = document.getElementById("loading");
        loading.style.display = 'none';
        var iframeComponent = document.getElementById("iframeComponent");
        iframeComponent.style.display = '';
        
    }
};
