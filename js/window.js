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
            "initHeight": "",
            "initWidth": "",    
            "prevHeight": "",
            "prevWidth": ""
        },
    },
    "internet": {
        "windId": "internet_window",
        "dims": {
            "initHeight": "",
            "initWidth": "",    
            "prevHeight": "",
            "prevWidth": ""
        },
    },
    "pictures": {
        "windId": "pic_window",
        "dims": {
            "initHeight": 340,
            "initWidth": 420,    
            "prevHeight": 340,
            "prevWidth": 420
        },
    },
    "videos": {
        "windId": "vid_window",
        "dims": {
            "initHeight": 485,
            "initWidth": 625,    
            "prevHeight": 485,
            "prevWidth": 625
        },
    },
    "game": {
        "windId": "game_window",
        "dims": {
            "initHeight": 675,
            "initWidth": 750,    
            "prevHeight": 675,
            "prevWidth": 750
        },
    },
    "folder": {
        "windId": "folder_window",
        "dims": {
            "initHeight": 470,
            "initWidth": 620,    
            "prevHeight": 470,
            "prevWidth": 620
        },
    }
}

var tempId;
$(document).ready(function() {
    $(".window").addClass("new");
    
    $(".resize-drag").draggable({
        drag: function(event) { bringForward(this); },
        handle: ".topbar"/*,
        containment: "window"*/
    });
    
    // for(var squareId in relations) {
    //     var windId = "#" + relations[squareId].windId;
    //     $(windId).resizable({
    //         resize: function(event) {
    //             relations[squareId].dims.prevHeight = $(this).height();
    //             relations[squareId].dims.prevWidth = $(this).width();
    //         },
    //         minHeight: relations[squareId].dims.initHeight,
    //         minWidth: relations[squareId].dims.initWidth
    //     })
    // }
    
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
    var css = { "display": "block", "position": "absolute", "z-index": zindex };
    
    if(!($(windId).hasClass("opened"))) {
        // open new window (with delay for flare)
        $("*").css("cursor", "progress");
        var rand = Math.floor(Math.random() * 600);
        setTimeout(function() {
            $(windId).addClass("opened");
            $(windId).addClass("active");
            
            if(windId === "#pic_window") {
                $("#image_slider").css({"width": "5460px"});
            }
            
            // randomize position only when opened the first time    
            if($(windId).hasClass("new")) {
                css.top = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight + "px";
                css.left = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth + "px";
                $(windId).removeClass("new");
            }
        
            $(windId).css(css);
            $("*").css("cursor", "default");
        }, rand);
    } else if(!$(windId).hasClass("active")) {
        // reactivate minimized window
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
        if(relations[squareId].windId === windId) { return squareId; }
    }
}

function bringForward(wind) {
    zindex++;
    $(wind).css({"z-index": zindex});
}

function hideWindow(windId) {
    $(windId).css("display", "none");
    $(windId).removeClass("active");
}