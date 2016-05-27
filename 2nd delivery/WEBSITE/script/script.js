var GIndex=1;
var GPos=0;
var interval;

$(document).ready(ready);

function ready(){
    "use strict";

    console.log("I'm ready!!");
    
    interval = setInterval(animateGallery, 2000);
        
    $("#img1").click(function(){
        $("#mainColumn").css("background-image","url(../img/1.png)");
        clearInterval(interval);
        
    });
    
    $("#img2").click(function(){
        $("#mainColumn").css("background-image","url(../img/2.png)");
        clearInterval(interval);
    });
    
    $("#img3").click(function(){
        $("#mainColumn").css("background-image","url(../img/3.png)");
        clearInterval(interval);
    });
    
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getDevice.php", //Relative or absolute path to file.php file
        data: {device:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var devices=JSON.parse(response);    
            var el+="<div class='course' id='c'><h2>"devices[0].Name"</h2><span>"+devices[0].Description+"</span></div>";             
            
            $("body").html(el);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}

function animateGallery() {
    if(window.GIndex==3){
        window.GIndex=1;
    }else{
        window.GIndex++;
    }
    console.log(window.GIndex);

    $("#mainColumn").css("background-image","url(../img/"+window.GIndex+".png)");
    $("#slideButton").css("margin-top",3+((window.GIndex-1)*133));
}