$(document).ready(ready);


function ready(){

  $(".collapse").on("hide.bs.collapse", function(){
      $(this).parent().find("span").attr("class","glyphicon glyphicon-plus-sign faqIcon");
  });
  $(".collapse").on("show.bs.collapse", function(){
    
      $(this).parent().find("span").attr("class","glyphicon glyphicon-minus-sign faqIcon");
  });
}