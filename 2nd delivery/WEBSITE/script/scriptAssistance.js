$(document).ready(ready);

var firstPanel="<div class=\"panel panel-default\">\
                        <div class=\"panel-heading\">\
                            <h4 class=\"panel-title\">\
                                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\"><span class=\"glyphicon glyphicon-minus-sign faqIcon\"></span></a>\
                            </h4>\
                        </div>\
                        <div id=\"collapse1\" class=\"panel-collapse collapse in\">\
                            <div class=\"panel-body\"></div>\
                        </div>\
                </div>";
var nextPanel="<div class=\"panel panel-default\">\
                        <div class=\"panel-heading\">\
                            <h4 class=\"panel-title\">\
                                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\"><span class=\"glyphicon glyphicon-plus-sign faqIcon\"></span></a>\
                            </h4>\
                        </div>\
                        <div id=\"collapse1\" class=\"panel-collapse collapse\">\
                            <div class=\"panel-body\"></div>\
                        </div>\
                </div>";

function ready(){
    
  $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getAS.php", //Relative or absolute path to file.php file
        //data: {device:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var aService=JSON.parse(response);               
            
            $(".title-with-tab").html(aService[0].Name);
            $(".asDescription").html(aService[0].Description);
            $(".asImage").attr("src", aService[0].Image);
            
            if(aService[0].hasOwnProperty('Question') && aService[0].Question!=null){
                var faqContent=firstPanel;
                for(i=1; i<aService.length; i++) {
                    faqContent=faqContent + nextPanel;
                }
                $("#accordion").html(faqContent);
                $(".panel-default").each(function(i,element){
                        $(element).find("a").attr("href","#collapse" + i);
                        $(element).find("a").prepend(aService[i].Question);
                        $(element).find(".panel-collapse").attr("id","collapse" + i);
                        $(element).find(".panel-body").html(aService[i].Answer.replace(/euro/g,"€"));
                });
                console.log("finished1");
            }
            else{
                $("#faqTab").hide();
            }
            console.log("finished2");
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });  

   

  $(document).on("hide.bs.collapse", ".panel-collapse", function(){
      console.log("Hiding");
      $(this).parent().find("span").attr("class","glyphicon glyphicon-plus-sign faqIcon");
  });
  $(document).on("show.bs.collapse", ".panel-collapse", function(){
      $(this).parent().find("span").attr("class","glyphicon glyphicon-minus-sign faqIcon");
  }); 
}