var ul;
var li_items;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;

function init() {
    ul = document.getElementById("image_slider");
    ul.style.left = 0;
    li_items = ul.children;
    imageNumber = li_items.length;
    imageWidth = li_items[0].children[0].clientWidth;
    
    if(imageWidth === 0) {
        // imageWidth = 420;
        imageWidth = document.getElementsByClassName("slide_img")[0];
        imageWidth = window.getComputedStyle(imageWidth);
        imageWidth = parseInt(imageWidth.getPropertyValue("width"));
    }
    ul.style.width = parseInt(imageWidth * imageNumber) + "px";
    
    prev = document.getElementById("prev");
    next = document.getElementById("next");
    toggleClickOn();
}

function animate(opts) {
    var start = new Date();
    var id = setInterval(function() {
        var timePassed = new Date() - start;
        var progress = timePassed / opts.duration;
        if (progress > 1){
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        if (progress == 1){
            clearInterval(id);
            opts.callback();
        }
    }, opts.delay || 17);
    //return id;
}

function slideTo(imageToGo) {
    var direction;
    var numOfImageToGo = Math.abs(imageToGo - currentImage);
    // slide toward left
 
    direction = currentImage > imageToGo ? 1 : -1;
    currentPostion = -1 * currentImage * imageWidth;
    var opts = {
        duration:1000,
        delta:function(p) {
            return p;
        },
        step:function(delta) {
            ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
        },
        callback:function() {
            currentImage = imageToGo;
            toggleClickOn();
        }	
    };
    animate(opts);
}

function onClickPrev() {
    toggleClickOff();
    if (currentImage === 0) {
        slideTo(imageNumber - 1);
    } else {
        slideTo(currentImage - 1);
    }
}

function onClickNext() {
    toggleClickOff();
    if (currentImage === imageNumber - 1) {
        slideTo(0);
    } else {
        slideTo(currentImage + 1);
    }
}

function toggleClickOn() {
    prev.onclick = function() {
        onClickPrev();
    };
    next.onclick = function() {
        onClickNext();
    };
}

function toggleClickOff() {
    prev.onclick = function() {};
    next.onclick = function() {};
}

window.onload = init;