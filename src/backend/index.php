<?php
    header("Access-Control-Allow-Origin: *");

    include_once("GetVatsHandler.php");
    include_once("DoneVoteHandler.php");

    $action = $_POST["action"];
    // echo "Hello world";
    // $arr = array("message" => "Hello World!!!");
    // echo json_encode($arr);
    // echo "Hello world";

    if ($action == "done_vote") {
        DoneVoteHandler::handle();
    }

    if ($action == "get_vats") {
        GetVatsHandler::handle();
    }

    // echo json_encode($_POST["vats"]);
?>