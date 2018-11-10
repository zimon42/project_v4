<?php

include_once("VoteHandlerDb.php");
include_once("PollHandlerDb.php");

class GetStatsHandler {

    public static function handle() {
        
        $vats = PollHandlerDb::loadVats();
        $numVats = PollHandlerDb::getNumVats();                
        $perc_arr = array();

        // Create percent array for stats mode
        for ($i=0; $i<$numVats; $i++) {	
            $voteArr = VoteHandlerDb::loadVotes();
            
            // Sum all votes for vat $i
            $sum = 0;
            for ($j=0; $j<count($voteArr); $j++) {
                $vote = $voteArr[$j];
                $voteVatArr = VoteHandlerDb::loadVoteVats($vote->id);
                $voteVat = $voteVatArr[$i]; // <-- OBS i not j
                $sum += $voteVat->perc;
            }
            
            $avg = $sum/count($voteArr);
            $perc_arr[$i] = round($avg);
        }	     

        // Get diagram data
        $returnArr = array();
        for ($i=0; $i<$numVats; $i++) {
            $vat = $vats[$i];
            $valArr = array();
            $valArr["val"] = $perc_arr[$i];
            $valArr["title"] = $vat->title;
            $valArr["color"] = $vat->color;
            array_push($returnArr, $valArr);
        }
        echo json_encode($returnArr);

    }

}

?>