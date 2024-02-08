<?php
// Get data from given form 
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];

$to = "evansjacobmurimi@gmail.com";
$subject = "This is the subject line";


$txt ="Name = ". $name . "\r\n Email = "
	. $email . "\r\n Message =" . $message;

$headers = "From: noreply@demosite.com" . "\r\n" .
			"CC: somebodyelse@example.com";
if($email != NULL) {
	mail($to, $subject, $txt, $headers);
}

// Redirect to
header("Location:last.html");
?>
