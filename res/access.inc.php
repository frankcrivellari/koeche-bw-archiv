<?php

// Users data
$imSettings['access']['users'] = array(
	'hajoma' => array(
		'id' => '7c867ueu',
		'groups' => array('7c867ueu'),
		'firstname' => 'Admin',
		'lastname' => '',
		'email' => 'hajoma',
		'password' => '$2a$11$ceSXTE/R.CWQTIuR9hLpw.iwRhffGaPWaFbx6PXZdZz86w1w6tzqu',
		'crypt_encoding' => 'csharp_bcrypt',
		'db_stored' => false,
		'page' => 'index.php'
	),
	'ZV_Alle' => array(
		'id' => 'aaabcdef',
		'groups' => array('13912n91'),
		'firstname' => 'Tagungen',
		'lastname' => '',
		'email' => 'ZV_Alle',
		'password' => '$2a$11$R22nUrR20ngMtYeMJFK.HeewJGZaQO0FQuy.3RYkfSJP6maikCFr6',
		'crypt_encoding' => 'csharp_bcrypt',
		'db_stored' => false,
		'page' => 'tagungen.php'
	)
);

// Admins list
$imSettings['access']['admins'] = array('7c867ueu');

// Page/Users permissions
$imSettings['access']['pages'] = array(
	'8' => array('aaabcdef')
);

// PASSWORD CRYPT

$imSettings['access']['password_crypt'] = array(
	'encoding_id' => 'php_default',
	'encodings' => array(
		'no_crypt' => array(
			'encode' => function ($pwd) { return $pwd; },
			'check' => function ($input, $encoded) { return $input == $encoded; }
		),
		'php_default' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_DEFAULT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		),
		'csharp_bcrypt' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_BCRYPT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		)
	)
);

// End of file access.inc.php