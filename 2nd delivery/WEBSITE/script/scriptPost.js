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
            $(".color").attr("src",devices[8]);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}