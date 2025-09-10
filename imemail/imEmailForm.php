<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Zweigverein', @$_POST['imObjectForm_1_1'], '', false);
	$form->setField('Name, Vorname des Registrierenden', @$_POST['imObjectForm_1_2'], '', false);
	$form->setField('Email-Adresse', @$_POST['imObjectForm_1_3'], '', false);
	$form->setField('Ihr Wunsch', @$_POST['imObjectForm_1_4'], '', false);

	$errorMessage = '';
	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != '2D5D2C755E8EF010252057234917E9AE' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('giselled@arcor.de', $_POST['imObjectForm_1_3'] != '' ? $_POST['imObjectForm_1_3'] : 'kochverein-Stuttgart@arcor.de', 'kochverein-Stuttgart@arcor.de', 'RegistrierungLVBW', "Neue Informationen", false);
		$form->mailToCustomer('giselled@arcor.de', '', $_POST['imObjectForm_1_3'], 'Vielen Dank für Ihre Nachricht', "Wir werden Ihre Nachricht baldmöglichts beantworten.\nMit kollegialen Grüßen\nWebmaster", true);
		@header('Location: ../danke.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file