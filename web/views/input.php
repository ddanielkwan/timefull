<?php
/**
 * Table: Validate
 * Cols: User, Password
 * Table: Info
 * Cols: Tasks, Schedules, Notes
 */
// create database
$validate_table = "Validate";
$info_table = "Info";

$host=  "localhost";
$user = "root";
$password= "";
$db = "cp476";


$task = $_POST['taskinput'];

echo $task;


$conn = new mysqli($host, $user, $password);
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);
else echo "Connected successfully";



//create db if not exist
try{
    
    if ($conn->query("CREATE DATABASE ". $db) === TRUE){
        
        echo "Database created";
    } else{
        echo "already created" ;
    }
}

finally{
    $conn->close();
            
        
}
// create our tables if not exist aleady
$conn = new mysqli($host, $user, $password, $db);


$sql = "CREATE TABLE $validate_table (User VARCHAR(255), Password VARCHAR(255))";
if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
  } else {
    echo "Error creating database: MAybe already created" ;
  }
$sql = "CREATE TABLE $info_table (User VARCHAR(255), Tasks VARCHAR(255), Schedules VARCHAR(255), Notes VARCHAR(255))";
if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
  } else {
    echo "Error creating database: Maybe already created" ;
  }



function validate($conn, $uname, $password){

}
function add_task($conn, $user, $task){

    
    $sql = "INSERT INTO info (User, Tasks) values ('$user', '$task')";
    // echo"\n";
    // echo $sql;
    if ($conn->query($sql) === TRUE) {
        echo "Inserted";
      } else {
        echo "Error inserting: " . $conn->error;
      }
}


add_task($conn, "Daniel", $task);

function clear($conn){
    $sql = "TRUNCATE TABLE info";
    echo"\n";
    echo $sql;
    if ($conn->query($sql) === TRUE) {
}
}
// clear($conn);
?>
