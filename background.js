window.onload = function() {
    var rand = Math.floor(Math.random() * 3);
    var background = document.getElementById("background");
    var sidebar = document.getElementById("sidebar");
    // alert(a);
    
    if(rand === 0) {
        background.style.backgroundImage = "url('https://40.media.tumblr.com/f9fedb19bd5ebe1869e0814fa7de85a8/tumblr_nomavpWFYK1tij7i0o1_540.jpg')";
        sidebar.style.backgroundColor = "MidnightBlue";
    } else if(rand === 1) {
        background.style.backgroundImage = "url('https://36.media.tumblr.com/2681434e0e532865decb771520686797/tumblr_n9wg0jrfkq1tij7i0o1_1280.jpg')";
        sidebar.style.backgroundColor = "Tan";
    } // else do nothing
}