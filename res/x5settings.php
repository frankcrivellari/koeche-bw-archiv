<?php

/*
|-------------------------------
|	GENERAL SETTINGS
|-------------------------------
*/

$imSettings['general'] = array(
	'site_id' => 'E21FB63F84711B835B32209657BFC592',
	'url' => 'https://mackes.eu/httpdocs/',
	'homepage_url' => 'https://mackes.eu/httpdocs/index.html',
	'icon' => '',
	'version' => '2025.2.4.0',
	'sitename' => 'Kochvereine im Landesverband der Köche Baden-Württemberg-Archiv',
	'lang_code' => 'de-DE',
	'rtl' => false,
	'public_folder' => '',
	'salt' => '79h4qg3jc1196un39610zx20b0hwboyur74hs78r215j79cn382s634147fnf95',
	'common_email_sender_addres' => 'giselled@arcor.de',
	'enable_sender_header' => true,
	'date_format' => 'dd MMM yyyy',
	'date_format_ext' => 'dddd dd MMM yyyy',
	'date_format_no_day' => 'MMM yyyy',
	'date_format_no_day_ext' => 'MMM yyyy'
);
/*
|-------------------------------
|	BREAKPOINTS
|-------------------------------
*/

$imSettings['breakpoints'] = array(
	array("name" => "Desktop", "hash" => "545117060ae3f2b213d760585572b34a", "start" => "max", "end" => 1013.0, "fluid" => false),
	array("name" => "Breakpoint 1", "hash" => "d2f9bff7f63c0d6b7c7d55510409c19b", "start" => 1012.9, "end" => 720.0, "fluid" => false),
	array("name" => "Mobile", "hash" => "72e5146e7d399bc2f8a12127e43469f1", "start" => 719.9, "end" => 480.0, "fluid" => false),
	array("name" => "Mobile Fluid", "hash" => "5ecdcca63de80fd3d4fbb36295d22b7d", "start" => 479.9, "end" => 0.0, "fluid" => true),
);
/*
|-------------------------------
|	PASSWORD POLICY
|-------------------------------
*/

$imSettings['password_policy'] = array(
	'required_policy' => false,
	'minimum_characters' => '6',
	'include_uppercase' => false,
	'include_numeric' => false,
	'include_special' => false
);
/*
|-------------------------------
|	Captcha
|-------------------------------
*/ImTopic::$captcha_code = "		<div class=\"x5captcha-wrap\">
			<label for=\"2hfnnty2-imCpt\">Wortprüfung:</label><br />
			<input type=\"text\" id=\"2hfnnty2-imCpt\" class=\"imCpt\" name=\"imCpt\" maxlength=\"5\" />
		</div>
";


$imSettings['admin'] = array(
	'icon' => 'admin/images/logo.gif',
	'notification_public_key' => 'BIvTRZQKJC5w7L0ldulJHTagOVoQrE_AiX8BbuEyXTN7iRs_Pa0vAkXuuBwxJTS1C5b75JMO42aVOYnWgEXS0PA',
	'notification_private_key' => 'qfazLJnQWhQbdDp8I8Etbdrhc_Cdm-VPWrexq5egEIw',
	'notification_dbprefix' => 'w5_f46b12f2_notifications_',
	'enable_notifications' => false,
	'theme' => 'orange',
	'extra-dashboard' => array(),
	'extra-links' => array()
);


/*
|--------------------------------------------------------------------------------------
|	DATABASES SETTINGS
|--------------------------------------------------------------------------------------
*/

$imSettings['databases'] = array();
$ecommerce = Configuration::getCart();
// Setup the coupon data
$couponData = array();
$couponData['products'] = array();
// Setup the cart
$ecommerce->setPublicFolder('');
$ecommerce->setCouponData($couponData);
$ecommerce->setSettings(array(
	'page_url' => 'https://mackes.eu/httpdocs/',
	'force_sender' => false,
	'mail_btn_css' => 'display: inline-block; text-decoration: none; color: rgba(0, 0, 0, 1); background-color: rgba(211, 211, 211, 1); padding: 8px 4px 8px 4px; border: solid; border-block-color: rgba(169, 169, 169, 1) rgba(169, 169, 169, 1); border-inline-color: rgba(169, 169, 169, 1) rgba(169, 169, 169, 1); border-width: 1px; border-radius: 0px; ',
	'email_opening' => 'Sehr geehrter Kunde,<br /><br />Vielen Dank für Ihren Einkauf. Hiermit erhalten Sie eine Zusammenfassung Ihrer Bestellung.<br /><br />Nachstehend finden Sie die Liste der bestellten Produkte, die Rechnungsinformationen sowie Hinweise zu der von Ihnen gewählten Versand- und Zahlungsart.',
	'email_closing' => 'Für weitere Informationen stehen wir Ihnen gern zur Verfügung.<br /><br />Mit freundlichen Grüßen, Ihr Vertriebs-Team.',
	'email_payment_opening' => 'Sehr geehrter Kunde,<br /> <br /> Vielen Dank für Ihren Einkauf. Wir bestätigen, dass Ihre Zahlung empfangen wurde und dass den Auftrag schnellstmöglich bearbeitet wird.<br /> <br /> Nachstehend finden Sie die Liste der bestellten Produkte und die Rechnungs- und Lieferinformationen.',
	'email_payment_closing' => 'Für weitere Informationen stehen wir Ihnen gern zur Verfügung.<br /><br />Mit freundlichen Grüßen, Ihr Vertriebs-Team',
	'email_digital_shipment_opening' => 'Sehr geehrte Kundin, sehr geehrter Kunde,<br /><br />vielen Dank für Ihren Einkauf. Nachstehend finden Sie die Liste der Download-Links für die bestellten Produkte:',
	'email_digital_shipment_closing' => 'Für weitere Informationen stehen wir Ihnen gern zur Verfügung.<br /><br />Mit freundlichen Grüßen, Ihr Vertriebs-Team',
	'email_physical_shipment_opening' => 'Sehr geehrte Kundin, sehr geehrter Kunde,<br /><br />vielen Dank für Ihren Einkauf. Nachstehend finden Sie die Liste der an Sie versendeten Produkte:',
	'email_physical_shipment_closing' => 'Für weitere Informationen stehen wir Ihnen gern zur Verfügung.<br /><br />Mit freundlichen Grüßen, Ihr Vertriebs-Team',
	'sendEmailBeforePayment' => true,
	'sendEmailAfterPayment' => false,
	'useCSV' => false,
	'header_bg_color' => 'rgba(192, 192, 192, 1)',
	'header_text_color' => 'rgba(0, 0, 0, 1)',
	'cell_bg_color' => 'transparent',
	'cell_text_color' => 'rgba(0, 0, 0, 1)',
	'availability_reduction_type' => 1,
	'border_color' => 'rgba(128, 128, 128, 1)',
	'owner_email' => '',
	'vat_type' => 'included',
	'availability_image' => ''
));

$ecommerce->setPriceFormatData(array(
	'decimals' => 2,
	'decimal_sep' => '.',
	'thousands_sep' => ',',
	'currency_to_right' => true,
	'currency_separator' => ' ',
	'show_zero_as' => '0',
	'currency_symbol' => '€',
	'currency_code' => 'EUR',
	'currency_name' => '',
));

$ecommerce->setDigitalProductsData(array());
$ecommerce->setProductsData(array());
$ecommerce->setSlugToProductIdMap(array());
$ecommerce->setCategoriesData(array());
$ecommerce->setCommentsData(array(
	'enabled' => false,
	'type' => "websitex5",
	'db' => '',
	'table' => 'w5_f46b12f2_products_comments',
	'prefix' => 'x5productPage_',
	'comment_type' => "commentandstars"
));
$ecommerce->setPaymentData(array(
	'9p11283l' => array(
		'id' => '9p11283l',
		'name' => 'Banküberweisung',
		'description' => 'Später per Banküberweisung zahlen.',
		'email_text' => 'Nachstehend finden Sie die Informationen, die für die Zahlung per Banküberweisung benötigt werden:

XXX YYY ZZZ

Bitte beachten Sie, dass Sie nach Abschluss der Zahlung eine Kopie der Überweisungsbestätigung gemeinsam mit der Bestellnummer senden müssen.',
		'enableAfterPaymentEmail' => false
	)));
$ecommerce->setShippingData(array(
	'n3aq6050' => array(
		'id' => 'n3aq6050',
		'name' => 'Mail',
		'description' => 'Die Ware wird in 2-5 Tagen geliefert.',
		'email_text' => 'Versand per Mail.\\nDie Ware wird in 3-5 Tagen geliefert.',
		'tracking_type' => 'none'
	),
	'9p11283l' => array(
		'id' => '9p11283l',
		'name' => 'Expresslieferung',
		'description' => 'Die Ware wird in 1-2 Tagen geliefert.',
		'email_text' => 'Versand per Expresslieferung.\\nDie Ware wird in 1-2 Tagen geliefert.',
		'tracking_type' => 'none'
	)));

/*
|-------------------------------------------------------------------------------------------
|	GUESTBOOK SETTINGS
|-------------------------------------------------------------------------------------------
*/

$imSettings['guestbooks'] = array();

/*
|-------------------------------------------------------------------------------------------
|	Dynamic Objects SETTINGS
|-------------------------------------------------------------------------------------------
*/

$imSettings['dynamicobjects'] = array(	'template' => array(
),
	'pages' => array(

	));


/*
|-------------------------------
|	EMAIL SETTINGS
|-------------------------------
*/

$ImMailer->emailType = 'html';
$ImMailer->exposeWsx5 = true;
$ImMailer->header = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">' . "\n" . '<html>' . "\n" . '<head>' . "\n" . '<meta http-equiv="content-type" content="text/html; charset=utf-8">' . "\n" . '<meta name="generator" content="Incomedia WebSite X5 Professional 2025.2.4 - www.websitex5.com">' . "\n" . '</head>' . "\n" . '<body bgcolor="#FFFFC0" style="background-color: #FFFFC0;">' . "\n\t" . '<table border="0" cellpadding="0" align="center" cellspacing="0" style="padding: 0; margin: 0 auto; width: 700px; border-collapse: separate;">' . "\n\t" . '<tr><td id="imEmailContent" style="min-height: 300px; padding: 10px; font: italic normal normal 8pt \'Verdana\'; color: #000000; background-color: #FFFFFF; text-decoration: none; text-align: left; width: 700px; border-style: solid; border-color: rgba(185, 185, 0, 1) rgba(185, 185, 0, 1) rgba(185, 185, 0, 1) rgba(185, 185, 0, 1); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 0; border-bottom: none; border-left-width: 1px;  margin-top: 25px;  margin-bottom: 25px; margin-left: 25px; margin-right: 25px;  background-color: #FFFFFF" width="700px">' . "\n\t\t";
$ImMailer->footer = "\n\t" . '</td></tr>' . "\n\t" . '<tr><td id="imEmailIcons" style="background-color: #FFFFFF;border-left: 1px solid rgba(185, 185, 0, 1); border-right: 1px solid rgba(185, 185, 0, 1);  padding-top: 25px;  padding-bottom: 25px; padding-left: 15px; padding-right: 15px;  text-align: center;  min-height: 300px; " width="700"></td></tr>' . "\n\t" . '<tr><td id="imEmailFooter" style="font: italic normal normal 7pt \'Verdana\'; color: #000000; background-color: transparent; text-decoration: none; text-align: center;  width: 700px;border-style: solid; border-block-color: rgba(185, 185, 0, 1) rgba(185, 185, 0, 1); border-inline-color: rgba(185, 185, 0, 1) rgba(185, 185, 0, 1); border-top-width: 0; border-top: none; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; padding: 10px; background-color: #FFFFFF" width="700px">' . "\n\t\t" . 'Die in dieser E-Mail enthaltenen Informationen sind ausschließlich für den genannten Empfänger bestimmt.<br>Sollten Sie diese E-Mail fälschlicherweise erhalten haben, informieren Sie bitte umgehend den Absender und  löschen Sie die Nachricht, ohne Kopien zu erstellen.' . "\n\t" . '</td></tr>' . "\n\t" . '</table>' . "\n" . '</body>' . "\n" . '</html>';
$ImMailer->bodyBackground = '#FFFFFF';
$ImMailer->bodyBackgroundEven = '#FFFFFF';
$ImMailer->bodyBackgroundOdd = '#F0F0F0';
$ImMailer->bodyBackgroundBorder = '#CDCDCD';
$ImMailer->bodyTextColorOdd = '#000000';
$ImMailer->bodySeparatorBorderColor = '#000000';
$ImMailer->emailBackground = '#FFFFC0';
$ImMailer->emailContentStyle = 'font: italic normal normal 8pt \'Verdana\'; color: #000000; background-color: #FFFFFF; text-decoration: none; text-align: left; ';
$ImMailer->emailContentFontFamily = 'font-family: Verdana;';

// End of file x5settings.php