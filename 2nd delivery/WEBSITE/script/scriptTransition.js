$(document).ready(ready);

var oddRow = "<tr>\
                <td class=\"transition-table-row\">\
                   <span><a><u class=\"word-content-style\"></u></a></span>\
                   <img  class=\"img-content-style\">\
                </td>\
            </tr>";

var evenRow = "<tr>\
                                <td class=\"transition-table-row\">\
                                    <img  class=\"img-content-style\">\
                                    <span><a><u class=\"word-content-style\"></u></a></span>\
                                </td>\
                            </tr>";

function ready(){
    var type1 = $("title").html();
    var params = (window.location.search.replace("?", "")).split("=");
    var orientation = decodeURIComponent(params[1]);
    if (params.length>=2) {
        
      var orientComp = orientation.split(" > ");
      var name1 = orientComp[orientComp.length-2];
      
        console.log(type1);
        console.log(name1);
      $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getTransitionLinks.php", //Relative or absolute path to file.php file
        data: {type: type1, name: name1},
        success: function(response) {
            console.log(JSON.parse(response));
            var content="";
            var assistances=JSON.parse(response);               
            $(".title-without-tab").append(name1);
            $(".col-sm-3").find("img").attr("src",assistances[0].sourceI);
            $("#orientation").html(resetOrientation(orientation));
            for (var i=0; i < assistances.length; i++){
                content = content + oddRow;
                i++;
                if(i < assistances.length){
                    content = content + evenRow;
                }
            }
            var dest;
            $("tbody").append(content);
            $(".word-content-style").each(function(i,el){
                $(el).html(assistances[i].Destination);
                if(assistances[i].Active=="1"){
                    $(el).parent().attr("href","assistance-service.html?as=" + orientation + assistances[i].Destination);
                }else{
                    $(el).parent().attr("style","color:grey");    
                }
            });
            $(".img-content-style").each(function(i,el){
                $(el).attr("src",assistances[i].destI);
            });
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
      });
    }
}