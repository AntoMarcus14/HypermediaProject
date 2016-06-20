var GIndex=1;
var GPos=0;
var homeLinks=["pages/device.html?dev=Devices > Smartphones and Telephones > Samsung Galaxy S7 Edge",
               "pages/sl-service.html?sl=Smart Life Services > TV & Entertainment > TIM Vision",
               "pages/sl-service.html?sl=Smart Life Services > Health and Wellness > Well Up"];

$(document).ready(Ready);

function Ready(){
    
    $(function() {
        $('#secondCol').matchHeight({
            target: $('#thirdCol')
        });
    });
    var interval;
    
    interval = setInterval(animateGallery, 2000);
        
    $("#img1").click(function(){
        $("#mainImage").attr("src","img/1.png");
        window.GIndex=1;
        $("#mainImage").parent().attr("href", homeLinks[window.GIndex-1]);
        clearInterval(interval);
        $("#slideArrow").css("top",8.5+(window.GIndex-1)*32+"%");
        
    });
    
    $("#img2").click(function(){
        $("#mainImage").attr("src","img/2.png");
        window.GIndex=2;
        $("#mainImage").parent().attr("href", homeLinks[window.GIndex-1]);
        clearInterval(interval);
        $("#slideArrow").css("top",8.5+(window.GIndex-1)*32+"%");
    });
    
    $("#img3").click(function(){
        $("#mainImage").attr("src","img/3.png");
        window.GIndex=3;
        $("#mainImage").parent().attr("href", homeLinks[window.GIndex-1]);
        clearInterval(interval);
        $("#slideArrow").css("top",8.5+(window.GIndex-1)*32+"%");
    });
    
    /*$(window).resize( function(){
        var h = $("#thirdCol").height();
        $("#secondCol").height(h);
    });*/
}

function animateGallery() {
    if(window.GIndex==3){
        window.GIndex=1;
    }else{
        window.GIndex++;
    }
    console.log(window.GIndex);

    $("#mainImage").attr("src","img/"+window.GIndex+".png");
    $("#mainImage").parent().attr("href", homeLinks[window.GIndex-1]);
    $("#slideArrow").css("top",8.5+(window.GIndex-1)*32+"%");
}

