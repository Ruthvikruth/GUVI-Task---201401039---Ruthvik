<?php
require 'vendor/autoload.php';
$client = new MongoDB\Client("mongodb://localhost:27017");

$Name = $_POST["Name"];
$Email = $_POST["Email"];
$Gender = $_POST["Gender"];
$Contact = $_POST["Contact"];
$DOB = $_POST["Password"];
$Age= $_POST["Age"];
$Website = $_POST["Website"];

$collection = $client->userinformation->users;
$collection->deleteOne(['Email'=> $Email]);

$collection->insertOne([
            'Email':$Email,
            'Name' => $Name,
            'Email' => $Email,
            'Gender' => $Gender,
            'Contact' => $Contact,
            'Age' => $Age,
            'DOB' => $DOB,
            'Website' => $Website
]);
?>