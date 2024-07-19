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
$passengers = $_POST['passengers'];
$Classe = $_POST['Classe'];

$stmt = $conn->prepare("INSERT INTO oneway (full_name,email,from_location, to_location, depart_date, passengers, class) VALUES (?,?,?,?,?,?,?)");
$stmt->bind_param("sssssss",$name ,$email , $from, $to, $depart_date, $passengers, $Classe);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Booking has been made successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>
