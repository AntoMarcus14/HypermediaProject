$(document).ready(ready);

var elem = "<a><h4><span class=\"glyphicon glyphicon-circle-arrow-right highlight-arrow-image\"></span><u></u></h4></a>";

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
        url: "../getHighlights.php", //Relative or absolute path to file.php file
        //data: {assistance:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var highlights=JSON.parse(response);               
            $("#orientation").html(addTag(orientation));
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
                $(element).html(highlights[i].Name);
            })
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    }
}