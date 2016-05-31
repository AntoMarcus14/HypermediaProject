<?php
//get all the course from db and reply using json structure

//echo "I'm the php";

//connection to db
$mysqli = mysqli_connect("localhost", "root", "", "tim_hyp_db");

//OR die
if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    //echo "Successful connection\n"; // connection ok

    # extract results mysqli_result::fetch_array
    $query = " SELECT * FROM device ";
    //query execution
    $result = mysqli_query($mysqli, $query);
    //if there are data available
    if($numRows=mysqli_num_rows($result) >0)
    {
        //echo $numRows;
        $myArray = array();//create an array
        foreach(mysqli_fetch_array($result, MYSQLI_ASSOC) as $row) {
            
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





?>