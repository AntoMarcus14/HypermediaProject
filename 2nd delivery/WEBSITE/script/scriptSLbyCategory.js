$(document).ready(ready);

var noVerticalDiv1 = "<div class=\"col-sm-6 \">\
                    <div class=\"row\">\
                        <div class=\"elem\">\
                        <div class=\"col-sm-6 \">\
                            <a href=\"#\"><img  class=\"category-images img\" alt=\"Image not found\"></a>\
                        </div>\
                        <div class=\"col-sm-6\">\
                            <a href=\"#\"><h3 class=\"category-subtitle\"></h3>\</a>\
                            <h4 class=\"slDesc\"><p></p></h4>\
                        </div>\
                        </div>\
                    </div>\
                    </div>" ;
var verticalDiv1 = "<div class=\"col-sm-6 verticalLine\">\
                    <div class=\"row\">\
                        <div class=\"elem\">\
                        <div class=\"col-sm-6\">\
                            <a href=\"#\"><img class=\"category-images img\" alt=\"Image not found\"></a>\
                        </div>\
                        <div class=\"col-sm-6\">\
                            <a href=\"#\"><h3 class=\"category-subtitle\"></h3></a>\
                            <h4 class=\"slDesc\"><p></p></h4>\
                        </div>\
                        </div>\
                    </div>\
                    </div>" ;
var noVerticalDiv2 = "<div class=\"col-sm-4 \">\
                    <div class=\"row\">\
                        <div class=\"elem\">\
                        <div class=\"col-sm-6\">\
                            <a href=\"#\"><img class=\"category-images img\" alt=\"Image not found\"></a>\
                        </div>\
                        <div class=\"col-sm-6\">\
                            <a href=\"#\"><h3 class=\"category-subtitle\"></h3></a>\
                            <h4 class=\"slDesc\"><p></p></h4>\
                        </div>\
                        </div>\
                    </div>\
                    </div>" ;
var verticalDiv2 = "<div class=\"col-sm-4 verticalLine\">\
                    <div class=\"row\">\
                        <div class=\"elem\">\
                        <div class=\"col-sm-6\">\
                            <a href=\"#\"><img class=\"category-images img\" alt=\"Image not found\"></a>\
                        </div>\
                        <div class=\"col-sm-6\">\
                            <a href=\"#\"><h3 class=\"category-subtitle\"></h3></a>\
                            <h4 class=\"slDesc\"><p></p></h4>\
                        </div>\
                        </div>\
                    </div>\
                    </div>" ;                    

var hrDiv = "<hr id=\"SL-category-hr\">";

function ready(){
    var param = (window.location.search.replace("?","")).split("=");
    var orientation = decodeURIComponent(param[1]);
    var orientComp = orientation.split(" > ");
    var catName = orientComp[orientComp.length-1];
    if(param.length>=2){
    $(".title-without-tab").html(catName);
    if(catName=="TV & Entertainment" || catName=="Home & Family"){    
        $(".topImg").attr("src","../img/"+catName.replace(" & ","__")+".png");
    }else{
        $(".topImg").attr("src","../img/"+catName.replace(/ /g,"_")+".png");
    }
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getSmartLife.php", //Relative or absolute path to file.php file
        data : {type : catName},
        success: function(response) {
            console.log(JSON.parse(response));
            $("#orientation").append("<u>" + catName + "</u>");
            var category=JSON.parse(response);  //è un array di array associativo (primo indice: numero riga, secondo indice: nome attributo)      
            var content="";
            var i=0;//quanti div di contenuto ho messo
            var j=0;//quanti div di contenuto restano da mettere in una riga
            //ALGORITMO:controllare per ogni riga se ce ne sono 2, se sono meno..., se sono piu valutare se ne ho almeno altri 2--> metto 3 in //una riga
            //e poi rinizio a fare la stessa valutazione sulla nuova riga
            while(i < category.length){
                content=content+"<div class=\"row\">";
                j = category.length - i;
                if(j==1){
                    content = content + noVerticalDiv1 + "</div>";
                    i++;
                } else if(j==2 || j==4){
                    content = content + noVerticalDiv1 + verticalDiv1 + "</div>";
                    i = i+2;
                    if(j==4){
                        content = content + hrDiv;
                    }
                } else if(j==3 || j>4){
                    content = content + noVerticalDiv2 + verticalDiv2 + verticalDiv2 + "</div>";
                    i = i+3;
                    if(j>4){
                        content = content + hrDiv;                        
                    }
                }
            }
            $(".background-category").append(content);
            $(".category-subtitle").each(function(i,element){
                $(element).html(category[i].Title);
            })
            $(".slDesc").each(function(i,element){
                $(element).html(category[i].LongDesc);
            })
            $(".category-images").each(function(i,element){
                $(element).attr("src", category[i].LittleImage);
            })
            $(".elem").each(function(i,el){
                if(category[i].LongDesc!=""){
                    $(el).find("a").attr("href","sl-service.html?sl=" +  $("#orientation").text() + " > "  + category[i].Title);
                    $(el).find("category-subtitle").parent().attr("href","sl-service.html?sl=" +  $("#orientation").text() + " > "  + category[i].Title);
                }
                else{
                    $(el).find("a").attr("href","#");
                    $(el).find(".category-subtitle").parent().attr("href","#");
                    $(el).find(".category-subtitle").attr("style","color:lightsteelblue");
                }
            })
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    }
}
