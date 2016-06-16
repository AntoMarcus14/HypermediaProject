var GIndex=1;
var GPos=0;

$(document).ready(Ready);

function Ready(){
    
    var h = $("#thirdCol").height();
    $(".colRes").equalHeights();
    var interval;
    
    interval = setInterval(animateGallery, 2000);
        
    $("#img1").click(function(){
        $("#mainImage").attr("src","../img/1.png");
        window.GIndex=1;
        clearInterval(interval);
        $("#slideArrow").css("top",8.5+(window.GIndex-1)*32+"%");
        
    });
    
    $("#img2").click(function(){
        $("#mainImage").attr("src","../img/2.png");
        window.GIndex=2;
        clearInterval(interval);
        $("#slideArrow").css("top",8.5+(window.GIndex-1)*32+"%");
    });
    
    $("#img3").click(function(){
        $("#mainImage").attr("src","../img/3.png");
        window.GIndex=3;
        clearInterval(interval);
        $("#slideArrow").css("top",8.5+(window.GIndex-1)*32+"%");
    });
    
    $(window).resize( function(){
        var h = $("#thirdCol").height();
        $("#secondCol").height(h);
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
    $("#slideArrow").css("top",8.5+(window.GIndex-1)*32+"%");
}

