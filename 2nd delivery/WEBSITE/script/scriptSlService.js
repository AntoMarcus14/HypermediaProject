$(document).ready(ready);

function ready(){
    var param = (window.location.search.replace("?","")).split("=");
    var orientation = decodeURIComponent(param[1]);
    if(param.length>=2){
    var orientComp = orientation.split(" > ");
    var slID = orientComp[orientComp.length-1];
    var slcategory = orientComp[orientComp.length-2];
    $(".title-with-tab").html(slID);
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getSlService.php", //Relative or absolute path to file.php file
        data : {category : slcategory, slID : slID},
        success: function(response) {
            console.log(JSON.parse(response));
            var category=JSON.parse(response);  //è un array di array associativo (primo indice: numero riga, secondo indice: nome attributo)      
            $("#orientation").html(addTag(orientation));
            if(category[0].Subscription==""){
                $("#subscript").hide();
            }
            $(".descriptSl").html(category[0].LongDesc);
            $("#rightImgSL").attr("src",category[0].Image);
            $(".subtitle").html(category[0].Subtitle);
            $(".content").html(category[0].Content);
            $("#title").html(category[0].Title);
            if(category[0].Title=="Well Up"){
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
            if(slcategory=="Promotions" || orientComp[orientComp.length-3]=="Smart Life Services"){
                $(".glyphicon-arrow-up").parent().append("  Up to " + slcategory);
                if(slcategory=="Promotions"){
                    $(".glyphicon-arrow-up").parent().attr("href", "promotions.html");
                }
                else{
                    $(".glyphicon-arrow-up").parent().attr("href", "sl-by-category.html?cat=" + slcategory);
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