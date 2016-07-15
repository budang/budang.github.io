$(document).ready(function() {
    var imageNumber, imageWidth;
    var currentPostion = 0, currentImage = 0;

    // init
    (function() {
        $("#image_slider").css("left", "0");
        imageNumber = $("#image_slider").children().length;
        imageWidth = $(".slide_img").width();
        $("#image_slider").css("width", imageWidth * imageNumber + "px");
        
        toggleClickOn();
    })();

    function animate(opts) {
        var start = new Date();
        var id = setInterval(function() {
            var timePassed = new Date() - start;
            var progress = timePassed / opts.duration;
            
            if(progress > 1)
                progress = 1;
            
            var delta = opts.delta(progress);
            opts.step(delta);
            
            if(progress === 1){
                clearInterval(id);
                opts.callback();
            }
        }, opts.delay || 17);
    }

    function slideTo(imageToGo) {
        var direction = currentImage > imageToGo ? 1 : -1;
        var numOfImageToGo = Math.abs(imageToGo - currentImage);        
        currentPostion = -1 * currentImage * imageWidth;
        
        var opts = {
            duration: 1000,
            delta: function(p) {
                return p;
            },
            step: function(delta) {
                 $("#image_slider").css("left", parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px');
            },
            callback: function() {
                currentImage = imageToGo;
                toggleClickOn();
            }	
        };
        animate(opts);
    }

    function onClickPrev() {
        $("#prev, #next").off("click");
        
        if(currentImage === 0) 
            slideTo(imageNumber - 1);
        else
            slideTo(currentImage - 1);
    }

    function onClickNext() {
        $("#prev, #next").off("click");

        if(currentImage === imageNumber - 1) 
            slideTo(0);
        else
            slideTo(currentImage + 1);
    }

    function toggleClickOn() {
        $("#prev").click(onClickPrev);
        $("#next").click(onClickNext);
    }
});