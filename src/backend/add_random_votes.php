<?php
include_once("VoteHandler.php");
include_once("PollHandlerDb.php");

$numVats = PollHandlerDb::getNumVats();
$numVotes = 100;

for ($v=0; $v<$numVotes; $v++) {

    $valsArr = array();

    for ($i=0; $i<$numVats; $i++) {
        $val = array(
            "val" => rand(2,32),
            "id" => $i+1
        );
        array_push($valsArr, $val);
    }

    VoteHandler::addVote($valsArr);

}

echo "Added ".$numVotes." votes";

?>