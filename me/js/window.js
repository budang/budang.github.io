var zindex = 0;
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
var maxHeight = Math.floor(screenHeight / 3), minHeight = Math.floor(screenHeight / 5);
var maxWidth = Math.floor(screenWidth / 3), minWidth = Math.floor(screenWidth / 5);

$(document).ready(function() {
    $(".window").addClass("new");
    
    $(".resize-drag").draggable({
        drag: function(event) { bringForward(this); },
        handle: ".topbar"
    });
    
    /*for(var squareId in relations) {
        var windowId = "#" + squareId + "_window";
        $(windowId).resizable({
            resize: function(event) {
                
            },
            minHeight: '',
            minWidth: ''
        })
    }*/
    
    $(".square").click(function() {
        $(this).css("background-color", "rgba(255, 255, 255, 0.7)");
        var squareId = $(this).attr("id");
        openWindow(squareId + "_window");
    });
    
    $(".exit, .min").click(function() {
        var windowId = "#" + $(this).parent().parent().attr("id");
        hideWindow(windowId);
        if($(this).hasClass("exit")) {
            if(windowId === "#videos_window") { $("#vid").get(0).load(); }
            $(windowId).removeClass("opened");
            var squareId = "#" + getSquare($(windowId).attr("id"));
            $(squareId).css("background-color", "transparent");
        } else { // min
            var squareId = "#" + getSquare($(windowId).attr("id"));
            $(squareId).css("background-color", "rgba(192, 192, 192, 0.5)");
        }
    });
    
    $(".window").click(function() {
        bringForward(this);
    });
});

function openWindow(windowId) {
    windowId = "#" + windowId;
    var css = { "position": "absolute", "z-index": ++zindex };
    
    if(!($(windowId).hasClass("opened"))) {
        // open new window (with delay for flare)
        $("*").css("cursor", "progress");
        var rand = Math.floor(Math.random() * 600);
        setTimeout(function() {
            $(windowId).fadeIn("fast");

            $(windowId).addClass("opened");
            $(windowId).addClass("active");
            
            if(windowId === "#pictures_window")
                $("#image_slider").css({"width": "5460px"});
            
            
            // randomize position only when opened the first time    
            if($(windowId).hasClass("new")) {
                css.top = Math.floor(Math.random() * (screen.height / 3 - minHeight + 1)) + minHeight / 2 + "px";
                css.left = Math.floor(Math.random() * (screen.width / 2 - minWidth + 1)) + minWidth / 2 + "px";
                $(windowId).removeClass("new");
            }
        
            $(windowId).css(css);
            $("*").css("cursor", "default");
            $("#status span, p.file, img.file, a, .square").css("cursor", "pointer");
        }, rand);
    } else if(!$(windowId).hasClass("active")) {
        // reactivate minimized window
        $(windowId).fadeIn("fast");
        
        $(windowId).addClass("active");
        $(windowId).css(css);
    } else {
        // minimize active window
        var squareId = "#" + getSquare($(windowId).attr("id"));
        $(squareId).css("background-color", "rgba(192, 192, 192, 0.5)");
        hideWindow(windowId);
    }
}

function getSquare(windowId) {
    return windowId.match(/[^_]*/i)[0];
}

function bringForward(window) {
    $(window).css("z-index", ++zindex);
}

function hideWindow(windowId) {
    $(windowId).fadeOut("fast", function() {
        $(windowId).removeClass("active");
    });
}