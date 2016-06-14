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
            filterContent = filterContent + panelHeading1 + "href = \"#collapse" + i/2 + "\"><i class=\"indicator fa fa-caret-down\" aria-hidden=\"true\"></i>" +
                filter[index] + "</a></h4></div>";
        }
        else{
            filterContent = filterContent + "<div id=\"collapse" + (i-1)/2 + panelCollapseBegin;
            var items = filter[index].split("_");
            for(var j=0; j<items.length; j++){
                            filterContent = filterContent + listItemBegin + filter[index] + "'>"+ items[j] + "</label></div></li>";
                        }
            filterContent = filterContent + "</ul></div>";
        }
        i++;
    }
    $(".panel-body").html(filterContent);
    $('label:contains("All")').find("input").prop("checked", true);
}