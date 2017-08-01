<?php 
if(isset($_POST['submit'])){
    
    $to = "adamwhite78+wedding@googlemail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['myInputs'][0];
    $subject = "Wedding RSVP - " . $name; 
    
    $message = "Evening Guests\n\n";
    
    $selected_att = $_POST['att-choice'];
    $selected_diet = $_POST['choice'];
    // $dietary = $_POST['requirements'];

    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];
    $myInputs = $_POST["myInputs"];
    foreach ($myInputs as $eachInput) 
    {
        $message .= $eachInput . ", \n ";
    }

    $message .= $selected_att . "\n\n";
    $message .= $selected_diet . "\n";
    // $message .= $dietary . "\n\n";
    $message .= "Song Requests:\n";
    $message .= $_POST['songs'];

    $headers = "From:" . $from . ",";
    // $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>