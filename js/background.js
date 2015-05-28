window.onload = function() {
    var rand = Math.floor(Math.random() * 3);
    var background = document.getElementById("background");
    var sidebar = document.getElementById("sidebar");
    // alert(a);
    
    if(rand === 0) {
        background.style.backgroundImage = "url('http://41.media.tumblr.com/01f2334e1769cc2ce66d01b7e3084048/tumblr_n7akjqf0QS1qea8eeo2_1280.jpg')";
        sidebar.style.backgroundColor = "MidnightBlue";
    } else if(rand === 1) {
        background.style.backgroundImage = "url('http://40.media.tumblr.com/af5a13af665a7051d6ea4403a17b8c21/tumblr_ms97uc3EV01qea8eeo2_1280.jpg')";
        sidebar.style.backgroundColor = "Tan";
    } // else do nothing
}