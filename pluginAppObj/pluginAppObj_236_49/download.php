<?php
include "config.php";

function getTotal($id, $startNumber, $returnCount){
	$fileName = "download_count_".$id.".txt";
	if(!$returnCount)
		echo 0;
	else{
		if(file_exists($fileName)){
			$count = intval(file_get_contents($fileName));
			if($count < $startNumber){
				file_put_contents($fileName, $startNumber);
				echo $startNumber;
			}
			else{
				echo $count;
			}
		}
		else{
			file_put_contents($fileName, $startNumber);
			echo $startNumber;
		}
	}

}

function download($id, $startNumber, $resource){

	$fileName = "download_count_".$id.".txt";
	if(!isset($_COOKIE['download_count_'.$id])) {
	    setcookie('download_count_'.$id, 'counted', strtotime( '+1 year' ), "/");

		if(file_exists($fileName)){
			$count = intval(file_get_contents($fileName));
			$count++;
			file_put_contents($fileName, $count);
		}
		else{
			$startNumber++;
			file_put_contents($fileName, $startNumber);
		}
	}
	
	header("Content-disposition: attachment; filename=" . pathinfo($resource, PATHINFO_BASENAME));
	header("Content-Length: " . filesize($resource));
	header("Content-type: application/octet-stream");
	$chunkSize = 1024 * 1024;
	$handle = fopen($resource, "rb");
	while (!feof($handle)) {
		$buffer = fread($handle, $chunkSize);
		echo $buffer;
		ob_flush();
		flush();
	}
	fclose($handle);
	exit;
}


if (isset($_GET['action'])) {
	switch($_GET['action']) {
		case 'download': download($id, $startNumber, $resource); break;
		case 'total': getTotal($id, $startNumber, $returnCount); break;
		default: break;
	}
}
?>