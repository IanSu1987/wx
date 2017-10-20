$(function(){

    $(".ui-collapsible-heading").on("click",function () {
        if(  $(this).parent().hasClass("ui-collapsible-collapsed")  ){
            $( "#"+$(this).parent().attr("val") ).show();
        }else{
            $( "#"+$(this).parent().attr("val") ).hide();
        }
    });

});


