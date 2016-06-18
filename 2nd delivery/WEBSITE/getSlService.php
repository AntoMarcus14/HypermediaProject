<?php

$mysqli = mysqli_connect("localhost", "root", "", "my_tim3m");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    # extract results mysqli_result::fetch_array
    $category = $_POST['category'];
    $slID = $_POST['slID'];
    $query = "SELECT * FROM slService LEFT JOIN guidedTour ON slService.Title = guidedTour.PromName AND guidedTour.IndexCat = '$category' LEFT JOIN slActivationAndRules ON slService.Title = slActivationAndRules.SmartLife WHERE slService.Title='$slID' ";
    //query execution
    $result = mysqli_query($mysqli, $query);
    //if there are data available
    if(mysqli_num_rows($result) >0)
    {
        $myArray = array();//create an array
        while($row = mysqli_fetch_assoc($result)) {
            $myArray[] = $row;
        }
        echo json_encode($myArray);
    }

    //free result
    mysqli_free_result($result);

    //close connection
    mysqli_close($mysqli);
}
?>