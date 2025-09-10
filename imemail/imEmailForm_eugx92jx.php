<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Anrede', @$_POST['imObjectForm_1_1'], '', false);
	$form->setField('Name:', @$_POST['imObjectForm_1_2'], '', false);
	$form->setField('Vorname:', @$_POST['imObjectForm_1_3'], '', false);
	$form->setField('Telefon', @$_POST['imObjectForm_1_4'], '', false);
	$form->setField('Datum', @$_POST['imObjectForm_1_5'], '', false);
	$form->setField('Ihre E-Mail Adresse', @$_POST['imObjectForm_1_6'], '', false);
	$form->setField('Strasse: Hausnummer:', @$_POST['imObjectForm_1_7'], '', false);
	$form->setField('PLZ:', @$_POST['imObjectForm_1_8'], '', false);
	$form->setField('Ort:', @$_POST['imObjectForm_1_9'], '', false);
	$form->setField('Frage an den Vorstand', @$_POST['imObjectForm_1_10'], '', false);
	$form->setAnswer('1','Kochen ist Kunst');
	$form->setField('Bitte wählen Sie aus wie wir Sie erreichen sollen.', @$_POST['imObjectForm_1_12'], '', false);

	$errorMessage = '';
	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != 'C7305B21E4D37ABBAE3C0E32B0E299C0' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('giselled@arcor.de', $_POST['imObjectForm_1_6'] != '' ? $_POST['imObjectForm_1_6'] : 'info@koeche-bw.de', 'info@koeche-bw.de', 'Von Koeche-BW Anfrage an den Vorstand', "", false);
		$form->mailToCustomer('giselled@arcor.de', '', $_POST['imObjectForm_1_6'], 'Von Koeche-BW-Webseite', "Vielen Dank für Ihre Nachricht.\nWir werden uns bei Ihnen melden.\n\nMit freundlichen Grüßen\nWebmaster HJM", true);
		@header('Location: ../danke.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file