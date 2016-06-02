$(document).ready(ready);

function ready(){
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getDevice.php", //Relative or absolute path to file.php file
        //data: {device:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var devices=JSON.parse(response);               
            
            $(".device-name").html(devices[0]);
            $(".description").html(devices[2]);
            $(".fullPrice").html(devices[3]);
            $(".monthPrice").html(devices[4]);
            $(".color").attr("src",devices[8]);
            $("#mainDeviceImg").attr("src",devices[5]);
            $("#1devicePic").attr("src",devices[5]);
            $("#2devicePic").attr("src",devices[6]);
            $("#3devicePic").attr("src",devices[7]);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
    
    $("#1devicePic").click(function(){
        $("#mainDeviceImg").fadeOut( "fast", function(){
            $("#mainDeviceImg").attr("src",$("#1devicePic").attr("src")).fadeIn();
        });
    });
    
    $("#2devicePic").click(function(){
        $("#mainDeviceImg").fadeOut( "fast", function(){
            $("#mainDeviceImg").attr("src",$("#2devicePic").attr("src")).fadeIn();
        });
    });
    
    $("#3devicePic").click(function(){
        $("#mainDeviceImg").fadeOut( "fast", function(){
            $("#mainDeviceImg").attr("src",$("#3devicePic").attr("src")).fadeIn();
        });
    });
}