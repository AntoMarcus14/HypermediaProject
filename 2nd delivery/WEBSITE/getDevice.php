<?php
//get all the course from db and reply using json structure

//echo "I'm the php";

//connection to db
$mysqli = mysqli_connect("localhost", "root", "", "my_tim3m");

//OR die
if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    //echo "Successful connection\n"; // connection ok

    $device = $_POST['device'];
    $category = $_POST['cat'];
    # extract results mysqli_result::fetch_array
    $query = " SELECT * FROM device LEFT JOIN guidedTour ON device.Name = guidedTour.PromName AND guidedTour.IndexCat ='$category' 
                LEFT JOIN TechCharacteristics ON device.Name = TechCharacteristics.Device WHERE device.Name ='$device' ";
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
            //$i++;
            //echo $row[0];
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