$(document).ready(ready);
var noVerticalDiv = "<div class=\"col-sm-4 promElement\">\
                            <div>\
                                <img>\
                                <a><p>Show<br>\
                                    device</p></a>\
                            </div>\
                            <h4 class=\"promName\"></h4>\
                            <p class=\"promText\"></p>\
                        </div>";
var verticalDiv = "<div class=\"col-sm-4 promElement verticalLine\">\
                            <div>\
                                <img>\
                                <a><p>Show<br>\
                                    device</p></a>\
                            </div>\
                            <h4 class=\"promName\"></h4>\
                            <p class=\"promText\"></p>\
                        </div>";
var hrDiv = "<hr id=\"SL-category-hr\">";

function toggleChevron(e) {
		$(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('fa-caret-down fa-caret-right');
}

function ready(){
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://tim3m.altervista.org/getPromotions.php", //Relative or absolute path to file.php file
        data: {category: "Promotions"},
        success: function(response) {
            console.log(JSON.parse(response));
            var promotions=JSON.parse(response);
            var filterPanel = promotions[promotions.length - 1];
            promotions.splice(promotions.length -1,1);
            console.log(filterPanel);
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
            $(".deviceRow").append(content);
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
            $(".slRow").append(content);
            $(".promElement").each(function(i,element){
                $(element).find("img").attr("src",promotions[i].Image);
                $(element).find(".promName").html(promotions[i].Name);
                $(element).find(".promText").html(promotions[i].PromText.replace(/euro/g ,"€"));
                if(promotions[i].Active==1) {
                    if(promotions[i].Type=="Devices"){
                        $(element).find("a").attr("href", "device.html?dev=Promotions > " + promotions[i].Name);
                    }
                    else {
                        $(element).find("a").attr("href", "sl-service.html?sl=Promotions > " + promotions[i].Name);
                    }
                }
                else{
                    $(element).find("a").attr("style", "color:lightsteelblue");
                }
                if(promotions[i].Type=="Smart Life Services"){
                    $(element).find("a" + ">p").html("Show<br>service");
                }
            });
            createFilterPanel(filterPanel);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
    
    $('#filterPanel').on('hidden.bs.collapse', toggleChevron);
	$('#filterPanel').on('shown.bs.collapse', toggleChevron);
    $(document).on("click", "input:checkbox", function() {
        var $box = $(this);
        if ($box.is(":checked")) {
            //console.log($box.attr("name"));
            // the name of the box is retrieved using the .attr() method
            // as it is assumed and expected to be immutable
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            // the checked state of the group/box on the other hand will change
            // and the current value is retrieved using .prop() method
            $(group).prop("checked", false);
            $box.prop("checked", true);
            var active = $box.parent().text().trim();
            if(active=="All"){
                $(".promotionRow").show();
                $(".titleInsideHR").css("border-bottom", "1px solid black");
            }
            else{
                $(".promotionRow").hide();
                $(".titleInsideHR").css("border-bottom", "1px solid white");
                $(".promotionRow[title='" + active + "']").show();
            }
        } else {
            $(".promotionRow").show();
            $(".titleInsideHR").css("border-bottom", "1px solid black");
        }
    });
}