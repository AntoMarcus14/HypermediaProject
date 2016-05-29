var GIndex=1;
var GPos=0;

$(document).ready(Ready);

function Ready(){

    console.log("I'm ready!!");
    var interval;

    
    interval = setInterval(animateGallery, 2000);
        
    $("#img1").click(function(){
        $("#mainImage").attr("src","../img/1.png");
        clearInterval(interval);
        
    });
    
    $("#img2").click(function(){
        $("#mainImage").attr("src","../img/2.png");
        clearInterval(interval);
    });
    
    $("#img3").click(function(){
        $("#mainImage").attr("src","../img/3.png");
        clearInterval(interval);
    });
    
}

function animateGallery() {
    if(window.GIndex==3){
        window.GIndex=1;
    }else{
        window.GIndex++;
    }
    console.log(window.GIndex);

    $("#mainImage").attr("src","../img/"+window.GIndex+".png");
    $("#slideArrow").css("margin-top",40+(window.GIndex-1)*165+"%");
}
