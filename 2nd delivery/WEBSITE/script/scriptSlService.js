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
            if(category[0].SmartLife=="WellUp"||category[0].SmartLife=="TIM Wallet"){
                $("#subscript").hide();
            }
            $(".descriptSl").html(category[0].Description);
            $("#rightImgSL").attr("src",category[0].Image);
            $(".subtitle").html(category[0].Subtitle);
            $(".content").html(category[0].Content);
            $(".glyphicon-arrow-up").parent().append("Up to Smart Life Category");
            $("#title").html(category[0].SmartLife);
            if(category[0].SmartLife=="WellUp"){
               $("#subtit").hide();
               $(".videoTag2").attr("src",category[0].SecondDescr);
               $("#desc2").hide();  
            }else{
              $("#subtit").html(category[0].FirstSubtitle);
              $(".videoTag2").hide();  
              $("#desc2").html(category[0].SecondDescr);
            }
            $("#desc").html(category[0].FirstDescription);
            $("#imageSl").attr("src",category[0].FirstImage);
            $("#subtit2").html(category[0].SecondSubtitle);
            $("#summary").append(category[0].Subscription);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    }
}