<?php

$servername = "localhost";
$username = "root";
$Password = "";

$Conn = new mysqli($servername, $username, $Password,"userinformation");


$Email = $_POST["Email"];
$Password = $_POST["Password"];

$sameEmail= mysqli_query($Conn,"select * from userinformation where Email = '$Email';");

if(mysqli_num_rows($sameEmail) > 0)
{
    $passwordMatch = mysqli_query($Conn,"select * from userinformation where Email = '$Email' and Password = '$Password';");
    if(mysqli_num_rows($passwordMatch) == 1)
    {
        echo "1";
    }
    else if(mysqli_num_rows($passwordMatch) == 0)
    {
        echo "2";
    }
}
else
{
    echo "3";
    exit;
}

$Conn->close();
?>