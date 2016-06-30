$(document).ready(ready);


var elementDiv = "<div class=\"element\">\
                        <a href=\"#\"><img alt=\"device img\">\
                        <h4 class=\"devName\"></h4></a>\
                        <h4 class=\"price\"> €</h4>\
                    </div>";

var activeFilters = ["All"];

function toggleChevron(e) {
		$(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('fa-caret-down fa-caret-right');
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
        url: "http://tim3m.altervista.org/getDevicesByCat.php", //Relative or absolute path to file.php file
        data: {category: catName},
        success: function(response) {
            console.log(JSON.parse(response));
            var devices=JSON.parse(response); 
            
            $("#orientation").append("<u>" + catName + "</u>");
            
            createFilterPanel(devices[devices.length-1]);
            var w = $(window).width();
            if (w < 768) {
                $(".in").removeClass("in");
            }
    
            var content="";
            for(i=0; i<devices.length-1; i++) {
                content = content + elementDiv;
            }
            $(".categoryContent").html(content);
            
            $(".element").each(function(i,el){
                        $(el).attr("title", devices[i].Tags);
                        $(el).find("img").attr("src", devices[i].Image);
                        $(el).find(".devName").html(devices[i].Name);
                        $(el).find(".price").prepend(devices[i].FullPrice.replace("euro","€"));
                        if(devices[i].Description!=""){
                            $(el).find("a").attr("href","device.html?dev=" + $("#orientation").text() + " > " + devices[i].Name);
                        }
                        else {
                            $(el).find(".devName").attr("style", "color:lightsteelblue");
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
    
    $(window).on("resize", function() {
        var w = $(this).width();
        if (w < 768) {
            $(".in").removeClass("in");
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