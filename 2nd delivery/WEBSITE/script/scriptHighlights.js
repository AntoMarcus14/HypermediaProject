$(document).ready(ready);

var elem = "<a><h4><span class=\"glyphicon glyphicon-circle-arrow-right highlight-arrow-image\"></span><u></u></h4></a>";

function ready(){
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getHighlights.php", //Relative or absolute path to file.php file
        success: function(response) {
            console.log(JSON.parse(response));
            var highlights=JSON.parse(response);    
            console.log(highlights);
            var leftContent = [];
            var rightContent = [];
            var i = 0;
            while(i<highlights.length){
                leftContent.push(highlights[i].Name);
                i++;
                if(i<highlights.length){
                    rightContent.push(highlights[i].Name);
                    i++;
                }
            }
            var content = "<div class=\"col-sm-6\">";
            for(i=0;i<leftContent.length;i++){
                content=content + elem;
            }
            content = content + "</div>";
            content=content+"<div class=\"col-sm-6\">";
            for(i=0; i<rightContent.length; i++){
                content=content + elem;
            }
            content = content + "</div>";
            $(".highlight-content").append(content);
            $(".highlight-arrow-image").each(function(i,element){
                if(highlights[i].Description!=""){
                    $(element).parent().parent().attr("href","assistance-service.html?ass=" + "Assistance Services" + " > " + "Highlights" + " > " + highlights[i].Name);
                } else {
                    $(element).parent().parent().attr("style", "color:lightsteelblue");
                }
                $(element).parent().find("u").html(highlights[i].Name);
            });
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}