<?php

//    $subject = "Test Email From XAMPP";
//    $msg = "This is a test email being sent from my localhost using XAMPP: https://www.reddit.com/r/funny/comments/8mtyar/when_harry_learned_the_truth/";
//
//    mail("nolan.kingdon@gmail.com", $subject, $msg);

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        header('Content-Type: application/json');
        $contents = $_POST['message'];
        $email = $_POST['email'];
        $head = $_POST['head'];
        $return = [];
        
        $return['email'] = $email;
        $return['content'] = $contents;
        $return['header'] = $head;
        
        mail($email, $head, $contents);
        echo json_encode($return, JSON_PRETTY_PRINT);
    }
?>