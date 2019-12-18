<?php
date_default_timezone_set('America/New_York');

$info = getdate();
$date = $info['mday'];
$month = $info['mon'];
$year = $info['year'];
$hour = $info['hours'];
$min = $info['minutes'];
$sec = $info['seconds'];
$day = $info['weekday'];

if($day=="Saturday" || $day=="Sunday"){
	if($hour>7 && $hour <23){
echo '$(".operators").show();'."\n".'//'.$day.'  The Hour is '.$hour;
	}else{
		echo '$(".operators").hide();'."\n".'//'.$day.'  The Hour is '.$hour;
	}
}else{
	if(($hour>7 && $hour<25) || ($hour<2)){
		echo '$(".operators").show();'."\n".'//'.$day.'  The Hour is '.$hour;
	}else{
		echo '$(".operators").hide();'."\n".'//'.$day.'  The Hour is '.$hour;
	}
}
?>
