$(document).ready(ready);
var noVerticalDiv = "<div class=\"col-sm-6 image-container\">\
                    <h3 class=\"category-subtitle\"></h3>\
                    <img class=\"category-images\">\
                </div>";
var verticalDiv = "<div class=\"col-sm-6 verticalLine image-container\">\
                    <h3 class=\"category-subtitle\"></h3>\
                    <img class=\"category-images\">\
                </div>" ;
var hrDiv = "<hr id=\"SL-category-hr\">";
function ready(){
    
    
    var type1 = $(".title-without-tab").html();
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getCategory.php", //Relative or absolute path to file.php file
        data : {type : type1},
        success: function(response) {
            console.log(JSON.parse(response));
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
                    content = content + noVerticalDiv + "</div>";
                    i++;
                } else if(j==2 || j==4){
                    content = content + noVerticalDiv + verticalDiv + "</div>";
                    i = i+2;
                    if(j==4){
                        content = content + hrDiv;
                    }
                } else if(j==3 || j>4){
                    content = content + noVerticalDiv + verticalDiv + verticalDiv + "</div>";
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
            $(".category-images").each(function(i,element){
                $(element).attr("src", category[i].Image);
            })
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}