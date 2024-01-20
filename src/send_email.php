<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Email content
    $to = "evansjacobmurimi@gmail.com"; // Your Gmail address
    $subject = "New Contact Form Submission: $subject";
    $message = "Name: $name\nEmail: $email\n\n$message";

    // Set the headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for contacting us. We will get back to you shortly.";
    } else {
        echo "Error sending the email. Please try again later.";
    }
}
?>
