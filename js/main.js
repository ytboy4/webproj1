$(document).ready(function(){
    $("#yes").click(function(){
        $("#ans_yes").removeClass("visuallyhidden");
        $("#ans_no, #ans_mb").addClass("visuallyhidden");
    });
    $("#no").click(function(){
        $("#ans_no").removeClass("visuallyhidden");
        $("#ans_yes, #ans_mb").addClass("visuallyhidden");
    });
    $("#maybe").click(function(){
        $("#ans_mb").removeClass("visuallyhidden");
        $("#ans_no, #ans_yes").addClass("visuallyhidden");
    });
    $("#reload").click(function(){
    	location.reload();
    });
});