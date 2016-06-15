<?php

$mysqli = mysqli_connect("localhost", "root", "", "my_tim3m");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    # extract results mysqli_result::fetch_array
    $category = $_POST['category'];
    $query = "SELECT * FROM promotion";
    $query2 = " SELECT * FROM filterPanel WHERE CategoryPage = '$category' ";
    //query execution
    $result = mysqli_query($mysqli, $query);
    $result2 = mysqli_query($mysqli, $query2);
    //if there are data available
    if(mysqli_num_rows($result) >0)
    {
        //echo mysqli_num_rows($result);
        $myArray = array();//create an array
        while($row = mysqli_fetch_assoc($result)) {
            
            //echo $row["Category"];
            $myArray[] = $row;
        }
        if(mysqli_num_rows($result2) >0) {
            $myArray[] = mysqli_fetch_assoc($result2);
        }
        
    
        //var_dump($myArray);
        echo json_encode($myArray);
    }

    //free result
    mysqli_free_result($result);

    //close connection
    mysqli_close($mysqli);
}
?>