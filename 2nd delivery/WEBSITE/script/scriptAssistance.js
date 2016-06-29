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
        
    var params = (window.location.search.replace("?", "")).split("=");
    var orientation = decodeURIComponent(params[1]);
    if (params.length>=2) {
        var orientComp = orientation.split(" > ");
        var id = orientComp[orientComp.length-1];
        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://tim3m.altervista.org/getAS.php", //Relative or absolute path to file.php file
        data: {assistance:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var aService=JSON.parse(response);               
            
            $(".title-with-tab").html(aService[0].Name);
            $(".asDescription").html(aService[0].Description);
            $(".asImage").attr("src", aService[0].Image);
            
            $("#orientation").html(addTag(orientation));
            
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
            if(aService[0].ActiveTransition=="1"){
              $(".transition-panel" + ">h4>a").attr("href","devices-for-as.html?as=" + orientation + " > Devices for");  
            }else{
              $(".transition-panel" + ">h4>a").attr("style","color:lightsteelblue");    
            }
            
            if(orientComp[orientComp.length-3]=="Assistance Services") {
                if(orientComp[orientComp.length-2]=="Highlights"){
                    $(".glyphicon-arrow-up").parent().attr("href","highlights.html"); 
                    $(".glyphicon-arrow-up").parent().append("   Up to " + orientComp[orientComp.length-2]);
                } else {
                    $(".glyphicon-arrow-up").parent().attr("href","assistance-by-category.html?ass=" + orientComp[orientComp.length-2]);
                    $(".glyphicon-arrow-up").parent().append("   Up to " + orientComp[orientComp.length-2]);
                }
            }
            else{
                $(".btn-color").html("<span class=\"glyphicon glyphicon-arrow-left\"></span>   Back to AS list");
                $(".btn-color").attr("href", "assistance-for-devices.html?dev=" + orientation.replace(" > " + aService[0].Name,""));
            }
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    }
   

  $(document).on("hide.bs.collapse", ".panel-collapse", function(){
      console.log("Hiding");
      $(this).parent().find("span").attr("class","glyphicon glyphicon-plus-sign faqIcon");
  });
  $(document).on("show.bs.collapse", ".panel-collapse", function(){
      $(this).parent().find("span").attr("class","glyphicon glyphicon-minus-sign faqIcon");
  }); 
}