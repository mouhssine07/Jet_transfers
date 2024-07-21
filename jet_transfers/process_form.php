<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "jet_transfers";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$name = $_POST['Full-name'];
$email = $_POST['email'];
$from = $_POST['from'];
$to = $_POST['to'];
$depart_date = $_POST['depart-date'];
$return_date = $_POST['return-date'];
$passengers = $_POST['passengers'];
$Classe = $_POST['Classe'];

// Check if return_date is empty and set it to null if it is
if (empty($return_date)) {
    $return_date = null;
}

$stmt = $conn->prepare("INSERT INTO flights (full_name,email,from_location, to_location, depart_date, return_date, passengers, class) VALUES (?,?,?,?,?,?,?,?)");
$stmt->bind_param("ssssssss",$name ,$email ,$from, $to, $depart_date, $return_date, $passengers, $Classe);

// Bind null value for return_date if it is empty
if (is_null($return_date)) {
    $stmt->bind_param("ssssssis",$name ,$email ,$from, $to, $depart_date, $return_date, $passengers, $Classe);
} else {
    $stmt->bind_param("ssssssss",$name ,$email ,$from, $to, $depart_date, $return_date, $passengers, $Classe);
}

$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Booking has been made successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>
