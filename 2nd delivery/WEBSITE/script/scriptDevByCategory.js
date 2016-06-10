$(document).ready(ready);

var elementDiv = "<div class=\"element\">\
                        <a href=\"#\"><img alt=\"device img\">\
                        <h4 class=\"devName\"></h4></a>\
                        <h4 class=\"price\">€</h4>\
                    </div>";

function ready(){
    
    var params = (window.location.search.replace("?", "")).split("=");
    var catName = decodeURIComponent(params[1]);
    console.log(catName);
    if (params.length>=2) {
    
    $(".title-without-tab").html(catName);
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getDevicesByCat.php", //Relative or absolute path to file.php file
        data: {category: catName},
        success: function(response) {
            console.log(JSON.parse(response));
            var devices=JSON.parse(response); 
            
            var content="";
            for(i=0; i<devices.length; i++) {
                content = content + elementDiv;
            }
            $(".categoryContent").html(content);
            
            $(".element").each(function(i,el){
                        $(el).find("img").attr("src", devices[i].Image1);
                        $(el).find(".devName").html(devices[i].Name);
                        $(el).find(".price").prepend(devices[i].FullPrice);
                        if(devices[i].Description!=""){
                            $(el).find("a").attr("href","device.html?dev=" + $("#orientation").text() + " > " + devices[i].Name);
                        }
                        var items = devices[i].ShortDesc.split("_");
                        var list = "<ul>";
                        for(var j=0; j<items.length; j++){
                            list = list + "<li>" + items[j] + "</li>";
                        }
                        list = list + "</ul>";
                        $(el).append(list);
            });

            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
    }
}