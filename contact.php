<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Get raw POST data
$data = json_decode(file_get_contents("php://input"));

// Validate fields
if (!$data || empty($data->name) || empty($data->email) || empty($data->message)) {
    http_response_code(400);
    echo json_encode(["message" => "Please fill in all required fields."]);
    exit;
}

$name = htmlspecialchars($data->name);
$email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
$mobile = htmlspecialchars($data->mobile);
$message = htmlspecialchars($data->message);

$to = "aboy1892@gmail.com"; // replace with your admin email
$subject = "Contact form submission from $name";
$body = "
Name: $name
Email: $email
Mobile: $mobile
Message:
$message
";

$headers = "From: $email\r\nReply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["message" => "Message sent successfully!"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Failed to send message."]);
}
?>
