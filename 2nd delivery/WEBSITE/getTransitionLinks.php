<?php

$mysqli = mysqli_connect("localhost", "root", "", "my_tim3m");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    # extract results mysqli_result::fetch_array
    $name = $_POST['name'];
    $type = $_POST['type'];
    $query1 = "SELECT Source, Destination, Active, device.Image AS sourceI, assistanceService.Image AS destI FROM transition LEFT JOIN device ON transition.Source = device.Name 
               LEFT JOIN assistanceService ON transition.Destination = assistanceService.Name 
               WHERE Source = '$name' ";
    $query2 = "SELECT Source, Destination, Active, assistanceService.Image, device.Image FROM transition LEFT JOIN assistanceService 
               ON transition.Source = assistanceService.Name 
               LEFT JOIN device ON transition.Destination = device.Name 
               WHERE Source = '$name' ";
    $query3 = "SELECT Source, Destination, Active, slService.Image AS sourceI, device.Image AS destI FROM transition LEFT JOIN slService ON transition.Source = slService.Title 
               LEFT JOIN device ON transition.Destination = device.Name 
               WHERE Source = '$name' ";
    if($type == "Devices") {
        $query = $query1;
    }
    else if($type == "Smart Life Services") {
        $query = $query3;
    }
    else {
        $query = $query2;
    }
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