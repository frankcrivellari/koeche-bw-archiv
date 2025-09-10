<?php
include("../res/x5engine.php");
$nameList = array("758","8yn","jjf","27k","fmf","hw8","v76","phy","fpr","y77");
$charList = array("5","G","P","M","L","4","F","J","U","4");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
