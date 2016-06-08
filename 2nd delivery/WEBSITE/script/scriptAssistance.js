$(document).ready(ready);


function ready(){
    
  $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../getAS.php", //Relative or absolute path to file.php file
        //data: {device:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var aService=JSON.parse(response);               
            
            $(".title-with-tab").html(aService[0].Name);
            $(".asDescription").html(aService[0].Description);
            $(".asImage").attr("src", aService[0].Image);
            
            $(".slList").html(devices[0].SLServices);
            var tab="";
            var i=0;
            for(var index in devices[0]) {
                if (devices[0].hasOwnProperty(index)&&i>=11&&devices[0][index]!=null) {
                    tab=tab+"<tr><td>" + index + "</td><td>" + devices[0][index] + "</td></tr> ";
                }
                i++;
            }
            $("#tech" + ">Table").html(tab);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });  
      


  $(".collapse").on("hide.bs.collapse", function(){
      $(this).parent().find("span").attr("class","glyphicon glyphicon-plus-sign faqIcon");
  });
  $(".collapse").on("show.bs.collapse", function(){
      $(this).parent().find("span").attr("class","glyphicon glyphicon-minus-sign faqIcon");
  });
}