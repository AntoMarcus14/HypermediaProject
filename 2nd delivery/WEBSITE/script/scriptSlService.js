$(document).ready(ready);

function ready(){
    var param = (window.location.search.replace("?","")).split("=");
    var orientation = decodeURIComponent(param[1]);
    if(param.length>=2){
    $(".title-with-tab").html(catName);
    var orientComp = orientation.split(" > ");
    var slID = orientComp[orientComp.length-1];
    var category = orientComp[orientComp.length-2];
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getSlService.php", //Relative or absolute path to file.php file
        data : {type : catName},
        success: function(response) {
            console.log(JSON.parse(response));
            var category=JSON.parse(response);  //è un array di array associativo (primo indice: numero riga, secondo indice: nome attributo)      
            $("#orientation").html(addTag(orientation));
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
            var decodedUrl = decodeURI(window.location.href);
            if(category=="Promotions" || orientComp[orientComp.length-3]=="Smart Life Services"){
                $(".glyphicon-arrow-up").parent().append(category);
                if(category=="Promotions"){
                    $(".glyphicon-arrow-up").parent().attr("href", "promotions.html");
                }
                else{
                    $(".glyphicon-arrow-up").parent().attr("href", "sl-by-category.html?cat=" + category);
                }
            }
            else{
                
            }
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    }
}