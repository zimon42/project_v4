<?php

include_once("VoteHandlerDb.php");
include_once("Vote.php");

class GetHistoryHandler {

    public static function handle() {
        // echo "Hello world!";
        $voteArr = VoteHandlerDb::loadVotes();

        for ($i=0; $i<count($voteArr); $i++) {
            $vote = $voteArr[$i];
            echo "<b>".$vote->voteDate."</b><br />";
        }
    }

}
?>