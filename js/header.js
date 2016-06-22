$(document).ready(function() {
    // timestamp
    // https://msdn.microsoft.com/library/ff743760(v=vs.94).aspx
    var options = {
        weekday: "short", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    (function showTime() {
        var date = new Date(Date());
        $("#time2").text(date.toLocaleTimeString("en-us", options));
        setTimeout(showTime, 60000);
    })();

    // glyphicon interactions
    /*$("#signal").click(function() {
        if($(this).hasClass("glyphicon-signal")) {
            $(this).removeClass("glyphicon-signal");
            $(this).addClass("glyphicon-ban-circle");
        } else {
            $(this).removeClass("glyphicon-ban-circle");
            $(this).addClass("glyphicon-signal");
        }
    }),*/
   
    /*$("#volume").click(function() {
        if($(this).hasClass("glyphicon-volume-up")) {
            $(this).removeClass("glyphicon-volume-up");
            $(this).addClass("glyphicon-volume-off");
        } else {
            $(this).removeClass("glyphicon-volume-off");
            $(this).addClass("glyphicon-volume-up");
        }
    }),*/
    
    $("#time").click(function() {
        $(this).css("display", "none");
        $("#time2").css("display", "inline");
    }),
    
    $("#time2").click(function() {
        $(this).css("display", "none");
        $("#time").css("display", "inline");
    }),
   
    (function() {
        function fullScreenChange() {
            if(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
                if($("#resize").hasClass("glyphicon-resize-full")) {
                    $("#resize").removeClass("glyphicon-resize-full");
                    $("#resize").addClass("glyphicon-resize-small");
                }
            } else if($("#resize").hasClass("glyphicon-resize-small")) {
                $("#resize").removeClass("glyphicon-resize-small");
                $("#resize").addClass("glyphicon-resize-full");
            }
        };
        
        // http://stackoverflow.com/questions/10706070/how-to-detect-when-a-page-exits-fullscreen
        document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
        document.addEventListener('mozfullscreenchange', fullScreenChange, false);
        document.addEventListener('fullscreenchange', fullScreenChange, false);
        document.addEventListener('MSFullscreenChange', fullScreenChange, false);
    })(),

    $("#resize").click(function() {
        if($(this).hasClass("glyphicon-resize-full")) {
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