var zindex = 0;
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
var maxHeight = Math.floor(screenHeight / 3), minHeight = Math.floor(screenHeight / 5);
var maxWidth = Math.floor(screenWidth / 3), minWidth = Math.floor(screenWidth / 5);

// square-window mappings
var relations = {
    "home": "home",
    "internet": "internet_window",
    "pictures": "pic_window",
    "videos": "vid_window",
    "game": "game_window",
    "folder": "folder_window"
}

$(document).ready(function() {
    $(".square").click(function() {
        $(this).css("background", "Red");
        var squareId = $(this).attr("id");
        openWindow(relations[squareId]);
    });
    
    $(".exit, .min").click(function() {
        var windId = "#" + $(this).parent().parent().attr("id");
        $(windId).css("display", "none");
        $(windId).removeClass("active");
        if($(this).attr("class") === "exit") {
            $(windId).removeClass("opened");
            var squareId = "#" + getSquare($(windId).attr("id"));
            $(squareId).css("background", "rgba(255, 255, 255, 0.6)");
        }
    });
    
    $(".window").click(function() {
        zindex++;
        $(this).css("z-index", zindex);
    });
});

function openWindow(windId) {
    windId = "#" + windId;
    if(!($(windId).hasClass("active"))) {
        $(windId).addClass("active");
        if(!($(windId).hasClass("opened"))) {
            $(windId).addClass("opened");
        }
        
        zindex++;
        var top = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight + "px";
        var left = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth + "px";
        
        if(windId === "#pic_window") {
            $("#image_slider").css({"width": "5460px"});
        }
        $(windId).css({
            "display": "block",
            "position": "absolute",
            "z-index": zindex,
            "top": top,
            "left": left
        });
    }
}

function getSquare(windId) {
    for(var squareId in relations) {
        if(relations[squareId] === windId) { return squareId; }
    }
}