$(document).ready(function() {
    $("#searchbar").keypress(function(e) {
        var search = $("#searchbar").val();
        if(e.which === 13 && search) {    
            var url = "https://www.google.com/search?q=" + encodeURIComponent(search);
            var win = window.open(url, '_blank');
            win.focus();
            $("#searchbar").val("");
        } 
    });
});