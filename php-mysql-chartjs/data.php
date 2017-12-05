<?php
//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'wEjzew54MT8WWHzW');
define('DB_NAME', 'live_monitor');

//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
	die("Connection failed: " . $mysqli->error);
}

//query to get data from the table
//$query = sprintf("SELECT playerid, score FROM score ORDER BY playerid");
//$query = sprintf("select count(case when trace_type = 100 then trace_type end) COUNT_100, count(case when trace_type = 180 then trace_type end) COUNT_180,  count(case when trace_type = 183 then trace_type end) COUNT_183, count(case when trace_type = 200 then trace_type end) COUNT_200, count(case when trace_type = 'ACK' then trace_type end) ACK_COUNT, count(case when trace_type = 'BYE' then trace_type end) BYE_COUNT, count(case when trace_type = 'INVITE' then trace_type end) INVITE_COUNT, count(case when trace_type = 'NOTIFY' then trace_type end) NOTIFY_COUNT, count(case when trace_type = 'PUBLISH' then trace_type end) PUBLISH_COUNT, count(case when trace_type = 'REGISTER' then trace_type end) REGISTER_COUNT, count(case when trace_type = 'SUBSCRIBE' then trace_type end) SUBSCRIBE_COUNT from call_legs_integrity");
$query = sprintf("select trace_type, count(trace_type) as count from call_legs_integrity group by trace_type");

//execute query
$result = $mysqli->query($query);

//loop through the returned data
$data = array();
foreach ($result as $row) {
//	print_r ($row);
	$data[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($data);
