$(document).ready(function() {
	$("#power").click(function() {
		$("#shutdown").css("display", "block");
	});

	$("#restart").click(function() {
		window.location.reload();
	});
});
