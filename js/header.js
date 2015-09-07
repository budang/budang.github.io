$(document).ready(function() {
    // timestamp
    // https://msdn.microsoft.com/library/ff743760(v=vs.94).aspx
    var options = {
        weekday: "short", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    var showTime = function() {
        var date = new Date(Date());
        $("#time").text(date.toLocaleTimeString("en-us", options));
        setTimeout(showTime, 60000);
    }

    // glyphicon interactions
    // $("#signal").click(function() {
    //     if($(this).hasClass("glyphicon-signal")) {
    //         $(this).removeClass("glyphicon-signal");
    //         $(this).addClass("glyphicon-ban-circle");
    //     } else {
    //         $(this).removeClass("glyphicon-ban-circle");
    //         $(this).addClass("glyphicon-signal");
    //     }
    // }),
   
    // $("#volume").click(function() {
    //     if($(this).hasClass("glyphicon-volume-up")) {
    //         $(this).removeClass("glyphicon-volume-up");
    //         $(this).addClass("glyphicon-volume-off");
    //     } else {
    //         $(this).removeClass("glyphicon-volume-off");
    //         $(this).addClass("glyphicon-volume-up");
    //     }
    // }),
    
    $("#time").click(function() {
        if($(this).hasClass("glyphicon-time")) {
            $(this).removeClass("glyphicon glyphicon-time");
            showTime();
        } else {
            $(this).addClass("glyphicon glyphicon-time");
            $(this).text("");
        }
    }),
   
    $("#resize").click(function() {
        if($(this).hasClass("glyphicon-resize-full")) {
            $(this).removeClass("glyphicon-resize-full");
            $(this).addClass("glyphicon-resize-small");
            var element = document.documentElement;
            if(element.requestFullscreen) {
                element.requestFullscreen();
            } else if(element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if(element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if(element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        } else {
            $(this).removeClass("glyphicon-resize-small");
            $(this).addClass("glyphicon-resize-full");
            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    });
});