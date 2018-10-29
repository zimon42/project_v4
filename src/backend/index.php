<?php
    header("Access-Control-Allow-Origin: *");

    include_once("DoneVoteHandler.php");
    include_once("PollHandlerDb.php")

    $action = $_POST["action"];
    // echo "Hello world";
    // $arr = array("message" => "Hello World!!!");
    // echo json_encode($arr);
    // echo "Hello world";

    if ($action == "done_vote") {
        DoneVoteHandler::handle();
    }

    // echo json_encode($_POST["vats"]);
?>