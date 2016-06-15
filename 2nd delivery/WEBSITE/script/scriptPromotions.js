$(document).ready(ready);
var noVerticalDiv = "<div class=\"col-sm-4 promElement\">\
                            <div>\
                                <img>\
                                <a><p>Show<br>\
                                    Device</p></a>\
                            </div>\
                            <h4 class=\"promName\"></h4>\
                            <p class=\"promText\"></p>\
                        </div>";
var verticalDiv = "<div class=\"col-sm-4 promElement verticalLine\">\
                            <div>\
                                <img>\
                                <a><p>Show<br>\
                                    Device</p></a>\
                            </div>\
                            <h4 class=\"promName\"></h4>\
                            <p class=\"promText\"></p>\
                        </div>";
var hrDiv = "<hr id=\"SL-category-hr\">";

function ready(){
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getPromotions.php", //Relative or absolute path to file.php file
        success: function(response) {
            console.log(JSON.parse(response));
            var promotions=JSON.parse(response);
            var numDevices = 0;
            var numSl = 0;
            for(var i=0; i<promotions.length; i++){
                if(promotions[i].Type=="Devices") {
                    numDevices++;
                }
                else {
                    numSl++;
                }
            }
            console.log(numDevices);
            console.log(numSl);
            //fill devices row
            var content="";
            var i=0;
            var j=0;
            while(i < numDevices){
                if(j==0){
                    if(i!=0) {
                        content = content + "</div>" + hrDiv;
                    }
                    content=content+"<div class=\"row\">";
                    content = content + noVerticalDiv;
                    j++;
                } else if(j==1){
                    content = content + verticalDiv;
                    j++;
                } else {
                    content = content + verticalDiv;
                    j=0;
                }
                i++;
            }
            content = content + "</div>";
            $(".deviceRow").html(content);
            //fill sl row
            content="";
            i=0;
            j=0;
            while(i < numSl){
                if(j==0){
                    if(i!=0) {
                        content = content + "</div>" + hrDiv;
                    }
                    content=content+"<div class=\"row\">";
                    content = content + noVerticalDiv;
                    j++;
                } else if(j==1){
                    content = content + verticalDiv;
                    j++;
                } else {
                    content = content + verticalDiv;
                    j=0;
                }
                i++;
            }
            content = content + "</div>";
            $(".slRow").html(content);
            $(".promElement").each(function(i,element){
                $(element).find("img").attr("src",promotions[i].Image);
                $(element).find(".promName").html(promotions[i].Name);
                $(element).find(".promText").html(promotions[i].PromText);
                if(promotions[i].Active) {
                    $(element).find("a").attr("href", "device.html?dev=Promotions > " + promotions[i].Name);
                }
                else{
                    $(element).parent().parent().attr("style", "color:lightsteelblue");
                }
            });
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}