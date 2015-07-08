var zindex = 0;
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
var maxHeight = Math.floor(screenHeight / 3), minHeight = Math.floor(screenHeight / 5);
var maxWidth = Math.floor(screenWidth / 3), minWidth = Math.floor(screenWidth / 5);

// square-window mappings
var relations = {
    "home": {
        "windId": "home",
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
            "initHeight": "340px",
            "initWidth": "420px",    
            "prevHeight": "",
            "prevWidth": ""
        },
    },
    "videos": {
        "windId": "vid_window",
        "dims": {
            "initHeight": "485px",
            "initWidth": "625px",    
            "prevHeight": "",
            "prevWidth": ""
        },
    },
    "game": {
        "windId": "game_window",
        "dims": {
            "initHeight": "675px",
            "initWidth": "750px",    
            "prevHeight": "",
            "prevWidth": ""
        },
    },
    "folder": {
        "windId": "folder_window",
        "dims": {
            "initHeight": "470px",
            "initWidth": "620px",    
            "prevHeight": "",
            "prevWidth": ""
        },
    }
}

$(document).ready(function() {
    $(".window").addClass("new");
    
    $(".resize-drag").draggable({
        drag: function(event) {
            bringForward(this);
            var windId = $(this).attr("id");
            var squareId = getSquare(windId);
            relations[squareId].dims.prevHeight = $(this).height() + "px";
            relations[squareId].dims.prevWidth = $(this).width() + "px";
        },
        containment: "window"
    });
    
    $(".resize-drag").resizable();
    
    $(".square").click(function() {
        $(this).css("background", "Red");
        var squareId = $(this).attr("id");
        openWindow(relations[squareId].windId);
    });
    
    $(".exit, .min").click(function() {
        var windId = "#" + $(this).parent().parent().attr("id");
        hideWindow(windId);
        if($(this).attr("class") === "exit") {
            $(windId).removeClass("opened");
            var squareId = "#" + getSquare($(windId).attr("id"));
            $(squareId).css("background", "rgba(255, 255, 255, 0.6)");
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
        // open closed window
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
    } else if(!$(windId).hasClass("active")) {
        // reactivate minimized window
        $(windId).addClass("active");
        $(windId).css(css);
    } else {
        // minimize active window
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