//function to make object.keys executable in IE
/*  if (typeof Object.keys !== "function") {
    (function() {
        Object.keys = Object_keys;
        function Object_keys(obj) {
            var keys = [], name;
            for (name in obj) {
                if (obj.hasOwnProperty(name)) {
                    keys.push(name);
                }
            }
            return keys;
        }
    })();
}  */


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
            
            $(".device-name").html(devices[0].Name);
            $(".description").html(devices[0].Description);
            $(".fullPrice").html(devices[0].FullPrice.replace("euro","€"));
            $(".monthPrice").html(devices[0].MonthPrice.replace("euro","€"));
            $(".color").attr("src",devices[0].Color);
            $("#mainDeviceImg").attr("src",devices[0].Image1);
            $("#1devicePic").attr("src",devices[0].Image1);
            $("#2devicePic").attr("src",devices[0].Image2);
            $("#3devicePic").attr("src",devices[0].Image3);
            $(".slList").html(devices[0].SLServices);
            var tab="";
            delete devices[0].Name;
            delete devices[0].Description;
            delete devices[0].Category;
            delete devices[0].FullPrice;
            delete devices[0].MonthPrice;
            delete devices[0].Image1;
            delete devices[0].Image2;
            delete devices[0].Image3;
            delete devices[0].Color;
            delete devices[0].SLServices;
            delete devices[0].Device;
            for(var index in devices[0]) {
                if (devices[0].hasOwnProperty(index)) {
                    tab=tab+"<tr><td>" + index + "</td><td>" + devices[0][index] + "</td></tr> ";
                }
            }
            $("#tech" + ">Table").html(tab);
            
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