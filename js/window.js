var wind = "";
var zindex = 5;

// opened
var opened = {
    home: false,
    internet_window: false,
    pic_window: false,
    vid_window: false,
    game_window: false,
    folder_window: false
}

$(document).ready(function() {
    $(".square").click(function() {
        zindex++;
        // alert(zindex);
        
        // if($(this).is("#home")) {
        // } else if($(this).is("#internet")) {
        //     openWindow("internet_window");
        // } else if($(this).is("#pictures")) {
        //     openWindow("pic_window");
        // } else if($(this).is("#videos")) {
        //     openWindow("vid_window");
        // } else if($(this).is("#game")) {
        //     openWindow("game_window");
        // } else if($(this).is("#folder")) {
        //     openWindow("folder_window");
        // }

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
        alert(wind);
        openWindow(wind);
    });
});

openWindow = function(windId) {
    if(opened[windId] === false) {
        opened[windId] = true;
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
        if(windId === "pic_window") {
            $("#image_slider").css({"width": "5460px"});
        }
        // alert(zindex);
        $("#" + windId).css({"display": "block", "position": "relative", "border": "5px double Blue", "z-index": zindex});
        // var element = document.getElementById(divID),
        // style = window.getComputedStyle(element),
        // top = style.getPropertyValue('z-index');
        // alert(top);
        // $("#" + divID).css({"background-color": "Black"});
    }
};