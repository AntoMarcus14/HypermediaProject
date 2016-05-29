$(document).ready(ready);

function ready(){
    
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