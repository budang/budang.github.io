var zindex = 0;

// active or opened windows
var opened = {
    home: false,
    internet_window: false,
    pic_window: false,
    vid_window: false,
    game_window: false,
    folder_window: false
}
var active = jQuery.extend({}, opened);

$(document).ready(function() {
    $(".square").click(function() {
        var wind;
        zindex++;
        switch($(this).attr("id")) {
            case "home":
                wind = "home";
                break;
            case "internet":
                wind = "internet_window";
                break;
            case "pictures":
                wind = "pic_window";
                break;
            case "videos":
                wind = "vid_window";
                break;
            case "game":
                wind = "game_window";
                break;
            case "folder":
                wind = "folder_window";
                break;
         }
        openWindow(wind);
    });
    
    $(".exit, .min").click(function() {
        var window = $(this).parent().parent().attr("id");
        $("#" + window).css("display", "none");
        active[window] = false;
        if($(this).attr("class") === "exit") {
            opened[window] = false;
        }
    });
});

openWindow = function(winID) {
    if(active[winID] === false) {
        if(opened[winID] === false) {
            opened[winID] = true;
        }
        active[winID] = true;
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
        if(winID === "pic_window") {
            $("#image_slider").css({"width": "5460px"});
        }
        // alert(zindex);
        $("#" + winID).css({"display": "inline", "position": "relative", "border": "5px double Blue", "z-index": zindex});
        $("#" + winID).css({"display": "block"});
        // var element = document.getElementById(divID),
        // style = window.getComputedStyle(element),
        // top = style.getPropertyValue('z-index');
        // alert(top);
        // $("#" + divID).css({"background-color": "Black"});
    }
};