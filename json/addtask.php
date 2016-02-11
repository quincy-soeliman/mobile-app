<?php
$task = $_POST['json'];
$arr_data = array();

try {
	$jsondata = file_get_contents("tasks.json");
	$arr_data = json_decode($jsondata, true);

	array_push($arr_data["todo"], array("task"=>$task) );

	file_put_contents('tasks.json', json_encode($arr_data, JSON_PRETTY_PRINT));

} catch(Exception $e) {
 echo "Chaught excception: ", $e->getMessage(), "\n";
}