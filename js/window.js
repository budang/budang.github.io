var zindex = 0;
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
var maxHeight = Math.floor(screenHeight / 3), minHeight = Math.floor(screenHeight / 5);
var maxWidth = Math.floor(screenWidth / 3), minWidth = Math.floor(screenWidth / 5);

// square-window mappings
var relations = {
    "home": {
        "windId": "home_window",
        "dims": {
            "initHeight": "600px",
            "initWidth": "500px",    
            "prevHeight": "600px",
            "prevWidth": "500px"
        },
    },
    "internet": {
        "windId": "internet_window",
        "dims": {
            "initHeight": "450px",
            "initWidth": "560px",    
            "prevHeight": "450px",
            "prevWidth": "560px"
        },
    },
    "pictures": {
        "windId": "pic_window",
        "dims": {
            "initHeight": "340px",
            "initWidth": "420px",    
            "prevHeight": "340px",
            "prevWidth": "420px"
        },
    },
    "videos": {
        "windId": "vid_window",
        "dims": {
            "initHeight": "485px",
            "initWidth": "625px",    
            "prevHeight": "485px",
            "prevWidth": "625px"
        },
    },
    "game": {
        "windId": "game_window",
        "dims": {
            "initHeight": "675px",
            "initWidth": "750px",    
            "prevHeight": "675px",
            "prevWidth": "750px"
        },
    },
    "folder": {
        "windId": "folder_window",
        "dims": {
            "initHeight": "470px",
            "initWidth": "620px",    
            "prevHeight": "470px",
            "prevWidth": "620px"
        },
    }
}

var tempId;
$(document).ready(function() {
    $(".window").addClass("new");
    
    $(".resize-drag").draggable({
        drag: function(event) { bringForward(this); },
        handle: ".topbar"
    });
    
    /*for(var squareId in relations) {
        var windId = "#" + relations[squareId].windId;
        $(windId).resizable({
            resize: function(event) {
                relations[squareId].dims.prevHeight = $(this).height();
                relations[squareId].dims.prevWidth = $(this).width();
            },
            minHeight: relations[squareId].dims.initHeight,
            minWidth: relations[squareId].dims.initWidth
        })
    }*/
    
    $(".square").click(function() {
        $(this).css("background-color", "rgba(255, 255, 255, 0.7)");
        var squareId = $(this).attr("id");
        openWindow(relations[squareId].windId);
    });
    
    $(".exit, .min").click(function() {
        var windId = "#" + $(this).parent().parent().attr("id");
        hideWindow(windId);
        if($(this).hasClass("exit")) {
            if(windId === "#vid_window") { $("#vid").get(0).load(); }
            $(windId).removeClass("opened");
            var squareId = "#" + getSquare($(windId).attr("id"));
            $(squareId).css("background-color", "transparent");
        } else { // min
            var squareId = "#" + getSquare($(windId).attr("id"));
            $(squareId).css("background-color", "rgba(192, 192, 192, 0.5)");
        }
    });
    
    $(".window").click(function() {
        bringForward(this);
    });
});

function openWindow(windId) {
    zindex++;
    windId = "#" + windId;
    var css = { "position": "absolute", "z-index": zindex };
    
    if(!($(windId).hasClass("opened"))) {
        // open new window (with delay for flare)
        $("*").css("cursor", "progress");
        var rand = Math.floor(Math.random() * 600);
        setTimeout(function() {
            $(windId).fadeIn("fast");

            $(windId).addClass("opened");
            $(windId).addClass("active");
            
            if(windId === "#pic_window")
                $("#image_slider").css({"width": "5460px"});
            
            
            // randomize position only when opened the first time    
            if($(windId).hasClass("new")) {
                css.top = Math.floor(Math.random() * (screen.height / 3 - minHeight + 1)) + minHeight / 2 + "px";
                css.left = Math.floor(Math.random() * (screen.width / 2 - minWidth + 1)) + minWidth / 2 + "px";
                $(windId).removeClass("new");
            }
        
            $(windId).css(css);
            $("*").css("cursor", "default");
            $("#status span, p.file, img.file, a, .square").css("cursor", "pointer");
        }, rand);
    } else if(!$(windId).hasClass("active")) {
        // reactivate minimized window
        $(windId).fadeIn("fast");
        
        $(windId).addClass("active");
        $(windId).css(css);
    } else {
        // minimize active window
        var squareId = "#" + getSquare($(windId).attr("id"));
        $(squareId).css("background-color", "rgba(192, 192, 192, 0.5)");
        hideWindow(windId);
    }
}

function getSquare(windId) {
    for(var squareId in relations) {
        if(relations[squareId].windId === windId) 
            return squareId;
    }
}

function bringForward(wind) {
    zindex++;
    $(wind).css("z-index", zindex);
}

function hideWindow(windId) {
    $(windId).fadeOut("fast");
    $(windId).removeClass("active");
}