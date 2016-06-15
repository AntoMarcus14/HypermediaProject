$(document).ready(ready);

function ready(){
    var param = (window.location.search.replace("?","")).split("=");
    var catName = decodeURIComponent(param[1]);
    if(param.length>=2){
    $(".title-with-tab").html(catName);
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getSlService.php", //Relative or absolute path to file.php file
        data : {type : catName},
        success: function(response) {
            console.log(JSON.parse(response));
            var category=JSON.parse(response);  //è un array di array associativo (primo indice: numero riga, secondo indice: nome attributo)      
            
            $(".descriptSl").html(category[0].Description);
            $("#rightImgSL").attr("src",category[0].Image);
            $(".subtitle").html(category[0].Subtitle);
            $(".content").html(category[0].Content);
            $(".glyphicon-arrow-up").parent().append("Up to Smart Life Category");
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    }
}