<?php
$name = $_POST['fullname'];
$visitor_email = $_POST['email'];
$project = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@aoneboys.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n" .
 "User Email: $visitor_email.\n" .
 "Project: $project.\n" .
 "User Message: $message.\n";

$to = 'kabiawubenedict@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";


mail($to, $email_subject, $email_body, $headers);




?>
Thank you for contacting us. We will be in touch with you shortly.