<?php

include_once("PollHandlerDb.php");
include_once("Vat.php");

function addVat($title, $startPerc, $imageSrc) {
    PollHandlerDb::saveToVatTable(new Vat($title, $startPerc, $imageSrc));
}

addVat("Läsk", 12, "soda2.jpg");
addVat("Kaffe", 12, "coffee.png");
addVat("Mjölk", 12, "milk.jpg");
addVat("Choklad", 12, "hot_chokolate.jpg");
addVat("Rejuvelac", 12, "rejuvelac.jpg");
addVat("Svart te", 12, "black_tea.png");
addVat("Grönt te", 12, "green_tea.jpg");
addVat("Roibos", 12, "roibos.jpg");

echo "Added vats<br>";

/*
{id:0, title: "Läsk", val: 25, img:"soda2.jpg", isLocked: false},
{id:1, title: "Kaffe", val: 25, img:"coffee.png", isLocked: false},
{id:2, title: "Mjölk", val: 25, img:"milk.jpg", isLocked: false},
{id:3, title: "Choklad", val: 25, img:"hot_chokolate.jpg", isLocked: false},
{id:4, title: "Rejuvelac", val: 25, img:"rejuvelac.jpg", isLocked: false},
{id:5, title: "Svart te", val: 25, img:"black_tea.png", isLocked: false},
{id:6, title: "Grönt te", val: 25, img:"green_tea.jpg", isLocked: false},
{id:7, title: "Roibos", val: 25, img:"roibos.jpg", isLocked: false}
{title: "Buljong", val: 25, img:"broth.jpg", isLocked: false},
{title: "Mineralvatten", val: 25, img:"mineral_water2.png", isLocked: false}
*/

?>