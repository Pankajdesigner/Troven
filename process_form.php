<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Email recipient address (replace with your email address)
    $to = "pankaj.paghadar8@gmail.com";

    // Email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    // Email message
    $email_message = "<strong>Name:</strong> $name<br>";
    $email_message .= "<strong>Email:</strong> $email<br>";
    $email_message .= "<strong>Mobile:</strong> $mobile<br>";
    $email_message .= "<strong>Subject:</strong> $subject<br><br>";
    $email_message .= "<strong>Message:</strong><br>$message";

    // Send email
    if (mail($to, $email_subject, $email_message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Invalid Request";
}
?>