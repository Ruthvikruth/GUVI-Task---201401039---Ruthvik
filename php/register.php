<?php

$servername = "localhost";
$username = "root";
$Password = "";

$Conn = new mysqli($servername, $username, $Password,"userinformation");

$Name = $_POST["Name"];
$Email = $_POST["Email"];
$Gender = $_POST["Gender"];
$Contact = $_POST["Contact"];
$Password = $_POST["Password"];

$sameEmail= mysqli_query($Conn,"select * from userinformation where Email = '$Email';");
if(mysqli_num_rows($sameEmail) > 0)
{
    echo "2";
    exit;
}
$sql = "insert into userinformation values('$Name','$Email','$Gender','$Contact','$Password');";
mysqli_query($Conn,$sql);
echo "1";
$Conn->close();
?>