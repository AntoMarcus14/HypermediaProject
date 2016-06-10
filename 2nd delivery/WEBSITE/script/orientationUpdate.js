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