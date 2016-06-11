$(document).ready;

var noVerticalDiv = "<div class=\"col-sm-6\">\
                            <h3 class=\"assistance-category-subtitle\"></h3>\
                            <a><u><h4 id=\"name-of-assistance\"></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                        </div>";

var verticalDiv="<div class=\"col-sm-6 verticalLine\">\
                            <h3 class=\"assistance-category-subtitle\"></h3>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                        </div>";

var verticalDiv1="<div class=\"col-sm-12\">\
                            <h3 class=\"assistance-category-subtitle\"></h3>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                        </div>";

var verticalDiv2="<div class=\"col-sm-12\">\
                            <h3 class=\"assistance-category-subtitle\"></h3>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                            <a><u><h4 id=\"name-of-assistance\></h4></u></a>\
                        </div>";

var hrDiv = "<hr id=\"SL-category-hr\">";

function ready(){
    
    var params = (window.location.search.replace("?", "")).split("=");
    var assisType = decodeURIComponent(params[1]);
    console.log(assisType);
    if (params.length>=2) {

    $(".title-without-tab").html(assisType);
    
    $ajax({
        method: "POST",
        crossDomain: true,
        url: "../getAsByCat.php",
        data: {assistanceType: assisType},
        success: function(response) {
            console.log(JSON.parse(response));
            var assistances =JSON.parse(response);//è un array di array associativo (primo indice: numero riga, secondo indice: nome attributo) 
            var content="";
            var subcat = assistances[0].SubCategory;
            var bol=0;//flag: 0 se la pagina non ha il filterpanel, cioè ha solo una subCategory
            for(var i=0; i<assistances.length; i++){
                if(subcat!=assistances[i].SubCategory){
                    bol=1;
                }
            }
            if(bol==0){
                content=content+"<div class=\"row assistance-image-background\">";
                //premessa: la query deve ritornare un elenco di row che siano ordinate in base alle subcategory, e non distribuite casualmente
                //in modo che quando vengono contate le diverse subcategory non ci siano ripetizioni
                var count=1;
                for(i=1; i<assistances.length; i++){
                    if(subcat!=assistances[i].SubCategory){
                        subcat=assistances[i].SubCategory;
                        count++;
                    }
                }
                if(count%2==0){
                    for(i=0;i<count;i=i+2){
                        content=content+noVerticalDiv+verticalDiv;
                        if(i+2!=count){
                            content=content+hrDiv;
                        }
                    }
                } else {
                    for(i=0;i<count;i++){
                        if(i%2==0){
                            content=content+noVerticalDiv;
                        } else if(i+1==count){
                            content=content+noVerticalDiv1
                        } else {
                            content=content+verticalDiv+hrDiv;
                        }
                    }
                }
            } else {
                content=content+"<div class=\"row\">\
                <h1 class=\"title-without-tab\">Assistance by category</h1>\
            </div>\
            <div class=\"row\">\
                <div class=\"col-sm-2\">\
                    <div class=\"row assistance-by-format\">\
                    </div>\
                </div>\
                <div class=\"col-sm-10 assistance-image-background\">";
                content=content+verticalDiv2;               
            }
            content=content+"</div>";
            
            $(".background-category").append(content);
            
            $(".assistance-category-subtitle").each(function(i,element){
                $(element).html(assistances[i].SubCategory);
            })
            $("#name-of-assistance").each(function(i,element){
                $(element).html(assistances[i].Name);
            })
        },
        error: function(request,error) 
        {
            console.log("Error");
        } 
    });
}