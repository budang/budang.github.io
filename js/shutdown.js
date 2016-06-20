$(document).ready(function() {
    $("#power").click(function() {
        $("#shutdown").css("display", "block");
    });

    $("#restart, #quit").mouseenter(function() {
        $(this).css("background-color", "white");
        $(this).find(".glyphicon").css("color", "rgba(102, 0, 0, 0.8)");
    });

    $("#restart, #quit").mouseleave(function() {
        $(this).css("background-color", "transparent");
        $(this).find(".glyphicon").css("color", "white");
    });

    $("#restart").click(function() {
        window.location.reload();
    });

    // $("#quit").click(function() {
    // 	$("*").off("click");
    // 	$("*").off("mouseenter");
    // 	$("*").off("mouseleave");

    //     $("#quit, #restart").removeClass("pointer-cursor");
    //     $("*").addClass("wait-cursor");

    // 	setTimeout(function() {
    //     	window.close();
    // 	}, 700);
    // });

    $(".exit-shutdown").click(function() {
		$("#shutdown").css("display", "none"); 
    });
});