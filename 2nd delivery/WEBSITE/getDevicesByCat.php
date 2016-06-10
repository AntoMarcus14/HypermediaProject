<?php

//connection to db
$mysqli = mysqli_connect("localhost", "root", "", "my_tim3m");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    $category = $_POST['category'];

    # extract results mysqli_result::fetch_array
    $query = " SELECT Name, ShortDesc, Description, FullPrice, Image1 FROM device WHERE Category = '$category' ";
    //query execution
    $result = mysqli_query($mysqli, $query);
    //if there are data available
    if(mysqli_num_rows($result) >0)
    {
        //echo mysqli_num_rows($result);
        $myArray = array();//create an array
        while($row = mysqli_fetch_assoc($result)) {
            
            //echo $row["Category"];
            $myArray[] = $row;
        }
    
        //var_dump($myArray);
        echo json_encode($myArray);
    }

    //free result
    mysqli_free_result($result);

    //close connection
    mysqli_close($mysqli);



}