$(document).ready(function() {
    
    $("#change").click(function(){
        $("#change").text("Egenskap ändrad").css({color: "red"});
});

    $("#add").click(function(){

        $("#addHtml").text("Lagt till nytt innehåll!").css({color: "red"});
    });

    $("#remove").click(function(){
        $("#remove").remove();
    })

});