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
    
    var params = (window.location.search.replace("?", "")).split("=");
    var orientation = decodeURIComponent(params[1]);
    if (params.length>=2) {
        
      var orientComp = orientation.split(" > ");
      if(orientComp[0]=="Promotions") {
          var deviceID = orientComp[1];
      }
      else{
          var deviceID = orientComp[2];
      }
      
      $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getDevice.php", //Relative or absolute path to file.php file
        data: {device: deviceID},
        success: function(response) {
            console.log(JSON.parse(response));
            var devices=JSON.parse(response);               
            
            $("#orientation").html(addTag(orientation));
            $(".device-name").html(devices[0].Name);
            $(".devDescription").html(devices[0].Description);
            var price=devices[0].FullPrice.replace("euro","€");
            $(".fullPrice" + ">h3").html(price + " €");
            $(".monthPrice").html(devices[0].MonthPrice.replace("euro","€"));
            $(".color").attr("src",devices[0].Color);
            $("#mainDeviceImg").attr("src",devices[0].Image1);
            $("#buyDeviceImage").attr("src",devices[0].Image1);
            $(".purchaseSummary" + ">h4").html(devices[0].Name);
            $(".purchaseSummary" + ">.devicePrice").html(price+ " €");
            if(devices[0].Image2=="null"){
                $("#1devicePic").hide();
                $("#2devicePic").hide();
                $("#3devicePic").hide();
            }
            else {
                $("#1devicePic").attr("src",devices[0].Image1);
                $("#2devicePic").attr("src",devices[0].Image2);
                $("#3devicePic").attr("src",devices[0].Image3);
            }
            
            $(".slList").html(devices[0].SLServices);
            var tab="";
            var i=0;
            for(var index in devices[0]) {
                if (devices[0].hasOwnProperty(index)&&i>=11&&devices[0][index]!=null) {
                    tab=tab+"<tr><td>" + index + "</td><td>" + devices[0][index] + "</td></tr> ";
                }
                i++;
            }
            $("#tech" + ">Table").html(tab);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
      });
    
    }
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