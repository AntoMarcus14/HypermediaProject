$(document).ready(ready);

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var elementDiv = "<div class=\"element\">\
                        <a href=\"#\"><img alt=\"device img\">\
                        <h4 class=\"devName\"></h4></a>\
                        <h4 class=\"price\"> €</h4>\
                    </div>";

var panelHeading1 = "<div class=\"panel-heading \" >\
						      <h4 class=\"panel-title\">\
							     <a data-toggle=\"collapse\" ";
var panelCollapseBegin = "\" class=\"panel-collapse collapse in\">\
						<ul class=\"list-group\">";

var listItemBegin = "<li class=\"list-group-item\">\
								<div class=\"checkbox\">\
									<label>\
										<input type=\"checkbox\" value=\"1\" name='";
				   
var activeFilters = ["All"];

function toggleChevron(e) {
		$(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('fa-caret-down fa-caret-right');
}

function createFilterPanel(filter){
    
    delete filter["CategoryPage"];
    var filterContent = "";
    var i = 0;
    for(var index in filter) {
        if(i%2==0 && filter[index]!=null){
            filterContent = filterContent + panelHeading1 + "href = \"#collapse" + i/2 + "\"><i class=\"indicator fa fa-caret-down\" aria-hidden=\"true\"></i>" +
                filter[index] + "</a></h4></div>";
        }
        else if(filter[index]!=null){
            
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
            
            $("#orientation").append("<u>" + catName + "</u>");
            
            createFilterPanel(devices[devices.length-1]);
    
            var content="";
            for(i=0; i<devices.length-1; i++) {
                content = content + elementDiv;
            }
            $(".categoryContent").html(content);
            
            $(".element").each(function(i,el){
                        $(el).attr("title", devices[i].Tags);
                        $(el).find("img").attr("src", devices[i].Image1);
                        $(el).find(".devName").html(devices[i].Name);
                        $(el).find(".price").prepend(devices[i].FullPrice.replace("euro","€"));
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
            $(group).each(function(i, el){
                    var active = $(el).parent().text().trim();
                    var index = activeFilters.indexOf(active);
                    if (index > -1 && active!="All") {
                        activeFilters.splice(index,1);
                    }
            });
            $box.prop("checked", true);
            var active = $box.parent().text().trim();
            if(active!="All"){
                activeFilters.push(active);
            }
            
            $(".element").show();
            //console.log($box.parent().text().trim());
            $(".element").each(function(i, el){
                    for(var j=0; j<activeFilters.length; j++){
                        if(!$(el).attr("title").includes(activeFilters[j])){
                            $(el).hide();
                        }
                    }
            });
        } else {
            var active = $box.parent().text().trim();
            var index = activeFilters.indexOf(active);
            if (index > -1 && active!="All") {
                activeFilters.splice(index,1);
            }
            $box.prop("checked", false);
            $(".element").show();
            //console.log($box.parent().text().trim());
            $(".element").each(function(i, el){
                    for(var j=0; j<activeFilters.length; j++){
                        if(!$(el).attr("title").includes(activeFilters[j])){
                            $(el).hide();
                        }
                    }
            });
        }
        console.log(activeFilters);
    });
    
}