function addTag(orientation){
    orientComp = orientation.split(" > ");
    var last = "<u>" + orientComp[orientComp.length-1] + "</u>";
    var result = "";
    for (var i=0; i< orientComp.length - 1; i++){
        result = result + orientComp[i] + " > ";
        
    }   
    result = result + last;
    return result;
}



function createFilterPanel(filter){
    
    
    var panelHeading1 = "<div class=\"panel-heading \" >\
						      <h4 class=\"panel-title\">\
							     <a data-toggle=\"collapse\" ";
    var panelCollapseBegin = "\" class=\"panel-collapse collapse in\">\
						<ul class=\"list-group\">";

    var listItemBegin = "<li class=\"list-group-item\">\
								<div class=\"checkbox\">\
									<label>\
										<input type=\"checkbox\" value=\"1\" name='";
    
    
    
    
    delete filter["CategoryPage"];
    var filterContent = "";
    var i = 0;
    for(var index in filter) {
        if(i%2==0){
            if(filter[index]!=null){
                filterContent = filterContent + panelHeading1 + "href = \"#collapse" + i/2 + "\"><i class=\"indicator fa fa-caret-down\" aria-hidden=\"true\"></i>" +
                filter[index] + "</a></h4></div>";
            }
            
        }
        else{
            if(filter[index]!=null){
                filterContent = filterContent + "<div id=\"collapse" + (i-1)/2 + panelCollapseBegin;
                var items = filter[index].split("_");
                for(var j=0; j<items.length; j++){
                    filterContent = filterContent + listItemBegin + filter[index] + "'>"+ items[j] + "</label></div></li>";
                }
                filterContent = filterContent + "</ul></div>";
            }
            
        }
        i++;
    }
    $(".panel-body").html(filterContent);
    $('label:contains("All")').find("input").prop("checked", true);
}


//resets the orientation info in case there are 2 consecutive transitions of multiple topics
function resetOrientation(orientation){
    orientComp = orientation.split(" > ");
    if(orientComp[0]=="Promotions" && orientComp.length>=4  || orientComp.length>=5) {
        
        var name = orientComp[orientComp.length-2];
        var newOrientation = "";
        $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../searchName.php", //Relative or absolute path to file.php file
        data : {name : name},
        success: function(response) {
            console.log(JSON.parse(response));
            var result=JSON.parse(response);
            newOrientation = newOrientation + result.TableName + " > " + result.Category + " > " + name + " > <u>" + orientComp[orientComp.length-1] + "</u>";
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
        });
        return newOrientation;
    }
    else{
        //if don't have to reset the orientation info the function returns the same orientation
        return addTag(orientation);
    }
}