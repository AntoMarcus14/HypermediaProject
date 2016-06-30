var arrow = "<a href=\"#\" class=\"btn btn-color btn-default\">\
                <span class=\"glyphicon glyphicon-arrow-left\">\
                </span>\ </a>";

$(document).ready(ready);

function ready(){
    
    var w = $(window).width();
    if (w < 768) {
            $(".transition-panel").appendTo(".tab-back");
    }
    
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
        url: "http://tim3m.altervista.org/getSlService.php", //Relative or absolute path to file.php file
        data : {category : slcategory, slID : slID},
        success: function(response) {
            console.log(JSON.parse(response));
            var category=JSON.parse(response);  //è un array di array associativo (primo indice: numero riga, secondo indice: nome attributo)
            var row = {TableName: "Smart Life Services", Category: category[0].Category};
            orientation = resetOrientation(orientation, row, "ShortTransition");
            orientComp = orientation.split(" > ");
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
            if(category[0].ActiveTransition=="1"){
              $(".transition-panel").find("a").attr("href","devices-for-sl.html?dev=" + orientation + " > Devices for");  
            }else{
              $(".transition-panel").find("a").attr("style","color:lightsteelblue");    
            }
            var decodedUrl = decodeURI(window.location.href);
            if(slcategory=="Promotions" || orientComp[orientComp.length-3]=="Smart Life Services"){
                $(".glyphicon-arrow-up").parent().append("  Up to " + category[0].Category);
                if(slcategory=="Promotions"){
                    $(".glyphicon-arrow-up").parent().attr("href", "promotions.html");
                }
                else{
                    $(".glyphicon-arrow-up").parent().attr("href", "sl-by-category.html?cat=" + category[0].Category);
                }
            }
            else{
               $(".glyphicon-arrow-up").parent().hide();
               $(".glyphicon-arrow-right").parent().hide();  
               $(".glyphicon-arrow-left").parent().html("<span class=\"glyphicon glyphicon-arrow-left\">\</span>  Back to " + category[0].Category);     
               orientation=orientation.replace(" > " + orientComp[orientComp.length-1], "");
               $(".glyphicon-arrow-left").parent().attr("href", "device.html?cat=" + orientation);    
            }
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    }
    
    $(window).on("resize", function() {
        var w = $(this).width();
        if (w < 768) {
            $(".transition-panel").appendTo(".tab-back");
        }
        else {
            $(".transition-panel").insertAfter(".tabs-left");
        }
    });
}