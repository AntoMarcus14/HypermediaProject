<?php

$mysqli = mysqli_connect("localhost", "root", "", "my_tim3m");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    $name = $_POST['name'];
    $query = "SELECT Category, 'Devices' as TableName FROM device WHERE Name = '$name' 
              UNION ALL 
              SELECT Category, 'Assistance Services' as TableName FROM assistanceService WHERE Name = '$name'
              UNION ALL
              SELECT Category, 'Smart Life Services' as TableName FROM slService WHERE Title = '$name' ";
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