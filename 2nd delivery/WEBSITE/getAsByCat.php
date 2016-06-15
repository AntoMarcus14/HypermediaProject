<?php

$mysqli = mysqli_connect("localhost", "root", "", "my_tim3m");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    $assistanceType = $_POST['assistanceType'];
    $query = "SELECT Name, SubCategory, Description FROM assistanceService WHERE Category = '$assistanceType' ORDER BY SubCategory ";
    $query2 = " SELECT * FROM filterPanel WHERE CategoryPage = '$assistanceType' ";
    $result = mysqli_query($mysqli, $query);
    $result2 = mysqli_query($mysqli, $query2);
    //if there are data available
    if(mysqli_num_rows($result) >0)
    {
        $myArray = array();//create an array
        while($row = mysqli_fetch_assoc($result)) {
            $myArray[] = $row;
        }
        if(mysqli_num_rows($result2) >0) {
            $myArray[] = mysqli_fetch_assoc($result2);
        }
        echo json_encode($myArray);
    }

    //free result
    mysqli_free_result($result);
    mysqli_free_result($result2);

    //close connection
    mysqli_close($mysqli);
}
?>