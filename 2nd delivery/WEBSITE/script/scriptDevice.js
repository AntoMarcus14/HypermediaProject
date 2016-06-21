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
      var deviceID = orientComp[orientComp.length-1];
      var category = orientComp[orientComp.length-2];
      
      $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://tim3m.altervista.org/getDevice.php", //Relative or absolute path to file.php file
        data: {device: deviceID, cat: category},
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
            $("#mainDeviceImg").attr("src",devices[0].Image);
            $("#buyDeviceImage").attr("src",devices[0].Image);
            $(".purchaseSummary" + ">h4").html(devices[0].Name);
            $(".purchaseSummary" + ">.devicePrice").html(price+ " €");
            if(devices[0].Image2=="null"){
                $("#1devicePic").hide();
                $("#2devicePic").hide();
                $("#3devicePic").hide();
            }
            else {
                $("#1devicePic").attr("src",devices[0].Image);
                $("#2devicePic").attr("src",devices[0].Image2);
                $("#3devicePic").attr("src",devices[0].Image3);
            }
            if(devices[0].ActiveTransition=="1"){
              $("#assistanceLink").attr("href","assistance-for-devices.html?dev=" + orientation + " > Assistance for");  
            }else{
              $("#assistanceLink").attr("style","color:lightsteelblue");    
            }
            
            var slItems = devices[0].SLServices.split("_");
            var list="";
            for(var j=0; j<slItems.length; j=j+2){
                    list = list + "<h4><li><a href=\"";
                    if(slItems[j+1]=="1"){
                        list = list + "sl-service.html?sl=" + orientation + " > " + slItems[j];
                    }
                    else{
                        list = list + "#\" style=\"color:lightsteelblue"; 
                    }
                    list = list + "\">" + slItems[j] + "</a></li></h4>";
            }
            $(".slList").html(list);
            var tab="";
            var i=0;
            for(var index in devices[0]) {
                if (devices[0].hasOwnProperty(index) && i>=16 && devices[0][index]!=null) {
                    tab=tab+"<tr><td>" + index + "</td><td>" + devices[0][index] + "</td></tr> ";
                }
                i++;
            }
            $("#tech" + ">Table").html(tab);
            var decodedUrl = decodeURI(window.location.href);
            if(category=="Promotions" || orientComp[orientComp.length-3]=="Devices"){
                if(devices[0].Prev!=null){
                    $(".glyphicon-arrow-left").parent().attr("href", decodedUrl.replace(devices[0].Name, devices[0].Prev));
                }
                if(devices[0].Next!=null){
                    $(".glyphicon-arrow-right").parent().attr("href", decodedUrl.replace(devices[0].Name, devices[0].Next));
                }
                $(".glyphicon-arrow-up").parent().append(category);
                if(category=="Promotions"){
                    $(".glyphicon-arrow-up").parent().attr("href", "promotions.html");
                }
                else{
                    $(".glyphicon-arrow-up").parent().attr("href", "device-by-category.html?cat=" + category);
                }
            }
            else{
                $(".glyphicon-arrow-right").parent().hide();
                $(".glyphicon-arrow-up").parent().hide();
                var from;
                if(orientComp[0] == "Assistance Services"){
                    from = "as";
                }
                else{
                    from = "sl";
                }
                $(".glyphicon-arrow-left").parent().attr("href", "devices-for-" + from + ".html?as=" + orientation.replace(" > " + deviceID,""));
                $(".glyphicon-arrow-left").parent().html("<span class=\"glyphicon glyphicon-arrow-left\"></span>   Back to Devices' list");
            }
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