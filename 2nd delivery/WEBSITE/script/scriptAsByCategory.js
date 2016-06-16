$(document).ready(ready);

var noVerticalDiv = "<div class=\"col-sm-6 div-filt\">\
                            <h3 class=\"assistance-category-subtitle\"></h3>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                        </div>";

var verticalDiv="<div class=\"col-sm-6 verticalLine div-filt vertLin\">\
                            <h3 class=\"assistance-category-subtitle\"></h3>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                        </div>";

var noVerticalDiv1="<div class=\"col-sm-12 div-filt\">\
                            <h3 class=\"assistance-category-subtitle\"></h3>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                        </div>";

var noVerticalDiv2="<div class=\"col-sm-12 assistance-by-format\">\
                            <h3 class=\"assistance-category-subtitle\"></h3>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 class=\"name-of-assistance\"></h4></u></a>\
                            <br>\
                        </div>";

var hrDiv = "<hr id=\"SL-category-hr\">";

var activeFilters = ["All"];

function toggleChevron(e) {
		$(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('fa-caret-down fa-caret-right');
}

function ready(){
    
    var params = (window.location.search.replace("?", "")).split("=");
    var assisType = decodeURIComponent(params[1]);
    console.log(assisType);
    if (params.length>=2) {

    $(".title-without-tab").html(assisType);
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "../getAsByCat.php",
        data: {assistanceType: assisType},
        success: function(response) {
            console.log(JSON.parse(response));
            var assistances =JSON.parse(response);//è un array di array associativo (primo indice: numero riga, secondo indice: nome attributo) 
            var content="";
            $("#orientation").append("<u>" + assisType + "</u>");
            
            var subcat = assistances[0].SubCategory;
            var bol=0;//flag: 0 se la pagina non ha il filterpanel, cioè ha solo una subCategory
            for(var i=0; i<assistances.length-1; i++){
                if(subcat!=assistances[i].SubCategory){
                    bol=1;
                }
            }
            if(bol==1){
                content=content+"<div class=\"row\">\
                <div class=\"col-sm-2\">\
                    <h3 id=\"filterPanelTitle\">Filter Panel</h3>\
                    <div id=\"filterPanel\" class=\"panel panel-primary behclick-panel\">\
				            <div class=\"panel-body\">\
					       </div>\
                    </div>\
                </div>\
                <div class=\"col-sm-10 assistance-by-format\">";
                //premessa: la query deve ritornare un elenco di row che siano ordinate in base alle subcategory, e non distribuite casualmente
                //in modo che quando vengono contate le diverse subcategory non ci siano ripetizioni
                var count=1;
                for(i=1; i<assistances.length-1; i++){
                    if(subcat!=assistances[i].SubCategory){
                        subcat=assistances[i].SubCategory;
                        count++;
                    }
                }
                if(count%2==0){
                    for(i=0;i<count;i=i+2){
                        content = content + "<div class=\"row\">";
                        content=content+noVerticalDiv+verticalDiv;
                        content = content + "</div>";
                        if(i+2!=count){
                            content=content+hrDiv;
                        }
                    }
                } else {
                    i=0;
                    while(i<count){
                        content = content + "<div class=\"row\">";
                        if(count-i==1){
                            content = content + noVerticalDiv1;
                            content = content + "</div>";
                            i++;
                        } else {
                            content= content + noVerticalDiv + verticalDiv;
                            content = content + "</div>" + hrDiv;
                            i=i+2;
                        }
                    }
                }
                content = content + "</div>";
            } else {
                content=content+"<div class=\"row assistance-image-background\">";
                content=content+noVerticalDiv2;
            }
            content=content+"</div>";
            
            $(".background-category").append(content);
            if(bol==1){
                createFilterPanel(assistances[assistances.length-1]); //crera il filtro solo dov'è necessario che ci sia
            }
            var temp = [assistances[0].SubCategory];
            var titleName = [assistances[0].Tags];
            subcat=assistances[0].SubCategory;
            for(i=1; i<assistances.length-1; i++){
                if(subcat!=assistances[i].SubCategory){
                    temp.push(assistances[i].SubCategory);
                    titleName.push(assistances[i].Tags);
                    subcat = assistances[i].SubCategory;
                }
            }
            
            $(".assistance-category-subtitle").each(function(i,element){
                $(element).html(temp[i]);
            });
            
            console.log(assistances);
            
            $(".div-filt").each(function(i,element){
                $(element).attr("title", titleName[i]);
            })
            
            var k=0;
            
            $(".name-of-assistance").each(function(i,element){
                if(assistances[k].Description!=""){
                    $(element).parent().parent().attr("href","assistance-service.html?ass=" + $("#orientation").text() + " > " + assistances[k].Name);
                } else {
                    $(element).parent().parent().attr("style", "color:lightsteelblue");
                }
                while($(element).parent().parent().parent().find("h3").text()!=assistances[k].SubCategory){
                    k++;
                }
                $(element).html(assistances[k].Name);
                k++;
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
            
            $(".div-filt").show();
            $(".SL-category-hr").show();
            //console.log($box.parent().text().trim());
            $(".div-filt").each(function(i, el){
                    for(var j=0; j<activeFilters.length; j++){
                        if(!$(el).attr("title").includes(activeFilters[j])){
                            $(el).hide();
                        }
                    }
                
            });
            if(active!="All"){
                $("hr").hide();
                $(".verticalLine").removeClass("verticalLine");
            } else {
                $("hr").show();
                $(".vertLin").each(function(i,element){
                    $(element).addClass("verticalLine")
                });
            }
        } else {
            var active = $box.parent().text().trim();
            var index = activeFilters.indexOf(active);
            if (index > -1 && active!="All") {
                activeFilters.splice(index,1);
            }
            $box.prop("checked", false);
            $(".div-filt").show();
            //console.log($box.parent().text().trim());
            $(".div-filt").each(function(i, el){
                    for(var j=0; j<activeFilters.length; j++){
                        if(!$(el).attr("title").includes(activeFilters[j])){
                            $(el).hide();
                        }
                    }
            });
            $("hr").show();
            $(".vertLin").each(function(i,element){
                $(element).addClass("verticalLine")
            });
        }
        console.log(activeFilters);
    });
    
}