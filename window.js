$(document).ready(function() {
    $(".square").click(function() {
        if($(this).is("#home")) {
        } else if($(this).is("#internet")) {
            openWindow("internet_window");
        } else if($(this).is("#pictures")) {
            openWindow("pic_window");
        } else if($(this).is("#videos")) {
            openWindow("vid_window");
        } else if($(this).is("#game")) {
            openWindow("game_window");
        } else if($(this).is("#folder")) {
            openWindow("folder_window");
        }
    });
});

openWindow = function(divID) {
    var screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;
    // alert(divID);
    // var top = Math.floor(Math.random() * (screenHeight * 3 / 4 + 1)) + "px";
    // var right = Math.floor(Math.random() * ((screenWidth - 75) * 3 / 4 + 1)) + "px";
    // alert(top + ", " + right);
    var top = 0;
    var right = 0;
    var height = 500 + "px";
    var width = 700 + "px";
    
    // if(divID !== "game_window") {
    //     // $("canvas").css({"margin": "auto", "position": "absolute"});
    //     $("#" + divID).css({"position": "absolute", "top": top, "right": right, "height": height, "width": width, "background-color": "Black", "z-index": "1", "box-sizing": "border-box"});
    // }
    if(divID === "pic_window") {
        $("#image_slider").css({"width": "5460px"});
    }
    
    $("#" + divID).css({"display": "block"});
    $("#" + divID).css({"background-color": "Black"});
}