var zindex = 0;

// square-window mappings
var relations = {
    "home": "home",
    "internet": "internet_window",
    "pictures": "pic_window",
    "videos": "vid_window",
    "game": "game_window",
    "folder": "folder_window"
}

function getSquare(windId) {
    for(var squareId in relations) {
        if(relations[squareId] === windId) { return squareId; }
    }
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
            $(squareId).css("background", "rgba(255, 255, 255, 0.7)");
        }
    });
});

openWindow = function(windId) {
    windId = "#" + windId;
    if(!($(windId).hasClass("active"))) {
        $(windId).addClass("active");
        if(!($(windId).hasClass("opened"))) {
            $(windId).addClass("opened");
        }
        zindex++;
        // alert(divID + "/n" + opened[divID]);
        // var screenHeight = window.innerHeight;
        // var screenWidth = window.innerWidth;
        // alert(divID);
        // var top = Math.floor(Math.random() * (screenHeight * 3 / 4 + 1)) + "px";
        // var right = Math.floor(Math.random() * ((screenWidth - 75) * 3 / 4 + 1)) + "px";
        // alert(top + ", " + right);
        // var top = 0;
        // var right = 0;
        // var height = 500 + "px";
        // var width = 700 + "px";
        
        // if(divID !== "game_window") {
        //     // $("canvas").css({"margin": "auto", "position": "absolute"});
        //     $("#" + divID).css({"position": "absolute", "top": top, "right": right, "height": height, "width": width, "background-color": "Black", "z-index": "1", "box-sizing": "border-box"});
        // }
        if(windId === "#pic_window") {
            $("#image_slider").css({"width": "5460px"});
        }
        // alert(zindex);
        $(windId).css({"display": "inline", "position": "relative", "border": "5px double Blue", "z-index": zindex});
        $(windId).css({"display": "block"});
        // var element = document.getElementById(divID),
        // style = window.getComputedStyle(element),
        // top = style.getPropertyValue('z-index');
        // alert(top);
        // $("#" + divID).css({"background-color": "Black"});
    }
};