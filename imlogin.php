<?php require_once("res/x5engine.php"); ?>
<?php
$pa = Configuration::getPrivateArea();
if (isset($_GET['landing_page'])) {
	$pa->savePage($_GET['landing_page']);
}
$fromCart = false;
$pa->admin_email = '';
if (isset($_POST['imUname']) && isset($_POST['imPwd'])) {
	$result = $pa->login($_POST['imUname'], $_POST['imPwd']);
	if ($result < 0) {
		header('Location: imlogin.php?loginstatus=' . $result);
		exit();
	}
	$page = $pa->getSavedPage() ? $pa->getSavedPage() : $pa->getLandingPage();
	if (!$page) {
		if(isset($_SERVER["HTTP_REFERER"]) && strlen($_SERVER["HTTP_REFERER"]) && strpos($_SERVER["HTTP_REFERER"], 'imlogin.php') === false) {
			$page = preg_replace('/\?.*/', '', $_SERVER["HTTP_REFERER"]) . '?loginstatus=1';
		} else {
			$page = 'imlogin.php?loginstatus=1';
		}
	}
	$pa->clearSavedPage();
	$pa->sessionSafeRedirect($page);
}
?>
<!DOCTYPE html><!-- HTML5 -->
<html prefix="og: http://ogp.me/ns#" lang="de-DE" dir="ltr">
	<head>
		<title>Geschützter Zugang - Kochvereine im Landesverband der Köche Baden-Württemberg-Archiv</title>
		<meta charset="utf-8" />
		<!--[if IE]><meta http-equiv="ImageToolbar" content="False" /><![endif]-->
		<meta name="author" content="hjmackes" />
		<meta name="generator" content="Incomedia WebSite X5 Pro 2025.2.4 - www.websitex5.com" />
		<meta property="og:locale" content="de" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://mackes.eu/httpdocs/imlogin.php" />
		<meta property="og:title" content="Geschützter Zugang" />
		<meta property="og:site_name" content="Kochvereine im Landesverband der Köche Baden-Württemberg-Archiv" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<link rel="stylesheet" href="style/reset.css?2025-2-4-0" media="screen,print" />
		<link rel="stylesheet" href="style/print.css?2025-2-4-0" media="print" />
		<link rel="stylesheet" href="style/style.css?2025-2-4-0" media="screen,print" />
		<link rel="stylesheet" href="style/template.css?2025-2-4-0" media="screen" />
		<link rel="stylesheet" href="pcss/imlogin.css?2025-2-4-0-638840565488003439" media="screen,print" />
		<script src="res/jquery.js?2025-2-4-0"></script>
		<script src="res/x5engine.js?2025-2-4-0" data-files-version="2025-2-4-0"></script>
		<script>
			window.onload = function(){ checkBrowserCompatibility('Der von Ihnen verwendete Browser unterstützt nicht die die Funktionen, die für die Anzeige dieser Website benötigt werden.','Der von Ihnen verwendete Browser unterstützt möglicherweise nicht die die Funktionen, die für die Anzeige dieser Website benötigt werden.','[1]Browser aktualisieren[/1] oder [2]Vorgang fortsetzen[/2].','http://outdatedbrowser.com/'); };
			x5engine.utils.currentPagePath = 'imlogin.php';
			x5engine.boot.push(function () { x5engine.utils.imCodeProtection('hjmackes'); });
			x5engine.boot.push(function () { x5engine.imPageToTop.initializeButton({}); });
		</script>
		<link rel="icon" href="favicon.ico?2025-2-4-0-638840565488003439" type="image/vnd.microsoft.icon" />
		<meta http-equiv="Expires" content="0" />
		<meta name="Resource-Type" content="document" />
		<meta name="Distribution" content="global" />
		<meta name="Robots" content="index, follow" />
		<meta name="Revisit-After" content="21 days" />
		<meta name="Rating" content="general" />
	</head>
	<body>
		<div id="imPageExtContainer">
			<div id="imPageIntContainer">
				<a class="screen-reader-only-even-focused" href="#imGoToCont" title="Überspringen Sie das Hauptmenü">Direkt zum Seiteninhalt</a>
				<div id="imHeaderBg"></div>
				<div id="imPage">
					<header id="imHeader">
						<h1 class="imHidden">Geschützter Zugang - Kochvereine im Landesverband der Köche Baden-Württemberg-Archiv</h1>
						<div id="imHeaderObjects"><div id="imHeader_imObjectImage_01_wrapper" class="template-object-wrapper"><div id="imHeader_imObjectImage_01"><div id="imHeader_imObjectImage_01_container"><img src="images/LVBW_TITEL320.jpg"  width="320" height="153" />
</div></div></div><div id="imHeader_imObjectImage_03_wrapper" class="template-object-wrapper"><div id="imHeader_imObjectImage_03"><div id="imHeader_imObjectImage_03_container"><a href="http://www.vkd.com" target="_blank"><img src="images/VKD_Logo.png"  width="108" height="108" />
</a></div></div></div><div id="imHeader_imObjectImage_04_wrapper" class="template-object-wrapper"><div id="imHeader_imObjectImage_04"><div id="imHeader_imObjectImage_04_container"><img src="images/LVBW_TITEL720.jpg"  width="720" height="153" />
</div></div></div><div id="imHeader_imMenuObject_05_wrapper" class="template-object-wrapper"><!-- UNSEARCHABLE --><a id="imHeader_imMenuObject_05_skip_menu" href="#imHeader_imMenuObject_05_after_menu" class="screen-reader-only-even-focused">Menü überspringen</a><div id="imHeader_imMenuObject_05"><nav id="imHeader_imMenuObject_05_container"><button type="button" class="clear-button-style hamburger-button hamburger-component" aria-label="Menü anzeigen"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></button><div class="hamburger-menu-background-container hamburger-component">
	<div class="hamburger-menu-background menu-mobile menu-mobile-animated hidden">
		<button type="button" class="clear-button-style hamburger-menu-close-button" aria-label="Schließen"><span aria-hidden="true">&times;</span></button>
	</div>
</div>
<ul class="menu-mobile-animated hidden">
	<li class="imMnMnFirst imPage" data-link-paths=",/httpdocs/index.html,/httpdocs/">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="index.html">
Homepage		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imLevel" data-link-paths=",/httpdocs/aktuelles.html" data-link-hash="-1004210257"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="aktuelles.html" class="label" onclick="return x5engine.utils.location('aktuelles.html', null, false)">Aktuelles</a></div></div><div class="multiple-column" style="opacity: 0; width: 0px;"><ul  class="open-right imUlCl-1">
</ul></div></li><li class="imMnMnMiddle imLevel" data-link-paths=",/httpdocs/jugend.html" data-link-hash="-1004209782"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="jugend.html" class="label" onclick="return x5engine.utils.location('jugend.html', null, false)">Jugend</a><button type="button" class="screen-reader-only clear-button-style toggle-submenu" aria-label="Untermenü anzeigen für Jugend" aria-expanded="false" onclick="if ($(this).attr('aria-expanded') == 'true') event.stopImmediatePropagation(); $(this).closest('.imLevel').trigger(jQuery.Event($(this).attr('aria-expanded') == 'false' ? 'mouseenter' : 'mouseleave', { originalEvent: event } ));">▼</button></div></div><div class="multiple-column" style=" width: 175px;"><ul  class="open-right imUlCl-2">
<li class="imMnMnFirst imLevel" data-link-paths=",/httpdocs/talentschmiedealle.html" data-link-hash="-1004208471"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="talentschmiedealle.html" class="label" onclick="return x5engine.utils.location('talentschmiedealle.html', null, false)">Talentschmiede</a></div></div></li><li class="imMnMnFirst imLevel" data-link-paths=",/httpdocs/achenbach-finale.html" data-link-hash="-1004208433"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="achenbach-finale.html" class="label" onclick="return x5engine.utils.location('achenbach-finale.html', null, false)">Achenbach Preis Frankfurt</a></div></div></li><li class="imMnMnFirst imLevel" data-link-paths=",/httpdocs/achenbach-bw-alle.html" data-link-hash="-1004207122"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="achenbach-bw-alle.html" class="label" onclick="return x5engine.utils.location('achenbach-bw-alle.html', null, false)">Achenbach-Preis BW</a></div></div><ul data-original-position="open-right" class="open-right" style="opacity: 0;" >
	</ul></li><li class=" imLevel"><div class="label-wrapper"><div class="label-inner-wrapper"><span class="label">REWE</span><button type="button" class="screen-reader-only clear-button-style toggle-submenu" aria-label="Untermenü anzeigen für REWE" aria-expanded="false" onclick="if ($(this).attr('aria-expanded') == 'true') event.stopImmediatePropagation(); $(this).closest('.imLevel').trigger(jQuery.Event($(this).attr('aria-expanded') == 'false' ? 'mouseenter' : 'mouseleave', { originalEvent: event } ));">▼</button></div></div><ul data-original-position="open-right" class="open-right" style="" >
	<li class="imMnMnFirst imPage" data-link-paths=",/httpdocs/rewe-pokal--finale-2012.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="rewe-pokal--finale-2012.html">
REWE Pokal  Finale 2012		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/rewe-pokal-finale-2010.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="rewe-pokal-finale-2010.html">
REWE Pokal Finale 2010		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/rewe-pokal-in-bw-2010-calw.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="rewe-pokal-in-bw-2010-calw.html">
REWE Pokal in BW 2010 Calw		</a>
</div>
</div>
	</li><li class="imMnMnLast imPage" data-link-paths=",/httpdocs/rewe-pokal-in-bw-2009-calw.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="rewe-pokal-in-bw-2009-calw.html">
REWE Pokal in BW 2009 Calw		</a>
</div>
</div>
	</li></ul></li></ul></div></li><li class="imMnMnMiddle imLevel" data-link-paths=",/httpdocs/zweigvereine.html" data-link-hash="-1004210048"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="zweigvereine.html" class="label" onclick="return x5engine.utils.location('zweigvereine.html', null, false)">Zweigvereine</a></div></div><div class="multiple-column" style="opacity: 0; width: 0px;"><ul  class="open-right imUlCl-5">
</ul></div></li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/freunde.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="freunde.html">
Freunde		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/sponsoren.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="sponsoren.html">
Sponsoren		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/tagungen.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="tagungen.html">
Tagungen		</a>
</div>
</div>
	</li><li class="imMnMnLast imPage" data-link-paths=",/httpdocs/impressum.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="impressum.html">
Impressum		</a>
</div>
</div>
	</li></ul></nav></div><a id="imHeader_imMenuObject_05_after_menu" class="screen-reader-only-even-focused"></a><!-- UNSEARCHABLE END --><script>
var imHeader_imMenuObject_05_settings = {
	'menuId': 'imHeader_imMenuObject_05',
	'responsiveMenuEffect': 'slide',
	'responsiveMenuLevelOpenEvent': 'mouseover',
	'animationDuration': 1000,
}
x5engine.boot.push(function(){x5engine.initMenu(imHeader_imMenuObject_05_settings)});
$(function () {
    $('#imHeader_imMenuObject_05_container ul li').not('.imMnMnSeparator').each(function () {
        $(this).on('mouseenter', function (evt) {
            if (!evt.originalEvent) {
                evt.stopImmediatePropagation();
                evt.preventDefault();
                return;
            }
        });
    });
});
$(function () {$('#imHeader_imMenuObject_05_container ul li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        clearTimeout(timeout);        setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).show(); }, 250);    }).on('mouseleave', function () {        timeout = setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).hide(); }, 250);    });});});

</script>
</div></div>
					</header>
					<div id="imStickyBarContainer">
						<div id="imStickyBarGraphics"></div>
						<div id="imStickyBar">
							<div id="imStickyBarObjects"><div id="imStickyBar_imMenuObject_02_wrapper" class="template-object-wrapper"><!-- UNSEARCHABLE --><a id="imStickyBar_imMenuObject_02_skip_menu" href="#imStickyBar_imMenuObject_02_after_menu" class="screen-reader-only-even-focused">Menü überspringen</a><div id="imStickyBar_imMenuObject_02"><nav id="imStickyBar_imMenuObject_02_container"><button type="button" class="clear-button-style hamburger-button hamburger-component" aria-label="Menü anzeigen"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></button><div class="hamburger-menu-background-container hamburger-component">
	<div class="hamburger-menu-background menu-mobile menu-mobile-animated hidden">
		<button type="button" class="clear-button-style hamburger-menu-close-button" aria-label="Schließen"><span aria-hidden="true">&times;</span></button>
	</div>
</div>
<ul class="menu-mobile-animated hidden">
	<li class="imMnMnFirst imPage" data-link-paths=",/httpdocs/index.html,/httpdocs/">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="index.html">
Homepage		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imLevel" data-link-paths=",/httpdocs/aktuelles.html" data-link-hash="-1004210257"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="aktuelles.html" class="label" onclick="return x5engine.utils.location('aktuelles.html', null, false)">Aktuelles</a></div></div><div class="multiple-column" style="opacity: 0; width: 0px;"><ul  class="open-right imUlCl-1">
</ul></div></li><li class="imMnMnMiddle imLevel" data-link-paths=",/httpdocs/jugend.html" data-link-hash="-1004209782"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="jugend.html" class="label" onclick="return x5engine.utils.location('jugend.html', null, false)">Jugend</a><button type="button" class="screen-reader-only clear-button-style toggle-submenu" aria-label="Untermenü anzeigen für Jugend" aria-expanded="false" onclick="if ($(this).attr('aria-expanded') == 'true') event.stopImmediatePropagation(); $(this).closest('.imLevel').trigger(jQuery.Event($(this).attr('aria-expanded') == 'false' ? 'mouseenter' : 'mouseleave', { originalEvent: event } ));">▼</button></div></div><div class="multiple-column" style=" width: 175px;"><ul  class="open-right imUlCl-2">
<li class="imMnMnFirst imLevel" data-link-paths=",/httpdocs/talentschmiedealle.html" data-link-hash="-1004208471"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="talentschmiedealle.html" class="label" onclick="return x5engine.utils.location('talentschmiedealle.html', null, false)">Talentschmiede</a></div></div></li><li class="imMnMnFirst imLevel" data-link-paths=",/httpdocs/achenbach-finale.html" data-link-hash="-1004208433"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="achenbach-finale.html" class="label" onclick="return x5engine.utils.location('achenbach-finale.html', null, false)">Achenbach Preis Frankfurt</a></div></div></li><li class="imMnMnFirst imLevel" data-link-paths=",/httpdocs/achenbach-bw-alle.html" data-link-hash="-1004207122"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="achenbach-bw-alle.html" class="label" onclick="return x5engine.utils.location('achenbach-bw-alle.html', null, false)">Achenbach-Preis BW</a></div></div><ul data-original-position="open-right" class="open-right" style="opacity: 0;" >
	</ul></li><li class=" imLevel"><div class="label-wrapper"><div class="label-inner-wrapper"><span class="label">REWE</span><button type="button" class="screen-reader-only clear-button-style toggle-submenu" aria-label="Untermenü anzeigen für REWE" aria-expanded="false" onclick="if ($(this).attr('aria-expanded') == 'true') event.stopImmediatePropagation(); $(this).closest('.imLevel').trigger(jQuery.Event($(this).attr('aria-expanded') == 'false' ? 'mouseenter' : 'mouseleave', { originalEvent: event } ));">▼</button></div></div><ul data-original-position="open-right" class="open-right" style="" >
	<li class="imMnMnFirst imPage" data-link-paths=",/httpdocs/rewe-pokal--finale-2012.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="rewe-pokal--finale-2012.html">
REWE Pokal  Finale 2012		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/rewe-pokal-finale-2010.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="rewe-pokal-finale-2010.html">
REWE Pokal Finale 2010		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/rewe-pokal-in-bw-2010-calw.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="rewe-pokal-in-bw-2010-calw.html">
REWE Pokal in BW 2010 Calw		</a>
</div>
</div>
	</li><li class="imMnMnLast imPage" data-link-paths=",/httpdocs/rewe-pokal-in-bw-2009-calw.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="rewe-pokal-in-bw-2009-calw.html">
REWE Pokal in BW 2009 Calw		</a>
</div>
</div>
	</li></ul></li></ul></div></li><li class="imMnMnMiddle imLevel" data-link-paths=",/httpdocs/zweigvereine.html" data-link-hash="-1004210048"><div class="label-wrapper"><div class="label-inner-wrapper"><a href="zweigvereine.html" class="label" onclick="return x5engine.utils.location('zweigvereine.html', null, false)">Zweigvereine</a></div></div><div class="multiple-column" style="opacity: 0; width: 0px;"><ul  class="open-right imUlCl-5">
</ul></div></li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/freunde.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="freunde.html">
Freunde		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/sponsoren.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="sponsoren.html">
Sponsoren		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/httpdocs/tagungen.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="tagungen.html">
Tagungen		</a>
</div>
</div>
	</li><li class="imMnMnLast imPage" data-link-paths=",/httpdocs/impressum.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="impressum.html">
Impressum		</a>
</div>
</div>
	</li></ul></nav></div><a id="imStickyBar_imMenuObject_02_after_menu" class="screen-reader-only-even-focused"></a><!-- UNSEARCHABLE END --><script>
var imStickyBar_imMenuObject_02_settings = {
	'menuId': 'imStickyBar_imMenuObject_02',
	'responsiveMenuEffect': 'slide',
	'responsiveMenuLevelOpenEvent': 'mouseover',
	'animationDuration': 1000,
}
x5engine.boot.push(function(){x5engine.initMenu(imStickyBar_imMenuObject_02_settings)});
$(function () {
    $('#imStickyBar_imMenuObject_02_container ul li').not('.imMnMnSeparator').each(function () {
        $(this).on('mouseenter', function (evt) {
            if (!evt.originalEvent) {
                evt.stopImmediatePropagation();
                evt.preventDefault();
                return;
            }
        });
    });
});
$(function () {$('#imStickyBar_imMenuObject_02_container ul li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        clearTimeout(timeout);        setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).show(); }, 250);    }).on('mouseleave', function () {        timeout = setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).hide(); }, 250);    });});});

</script>
</div></div>
						</div>
					</div>
					<div id="imSideBar">
						<div id="imSideBarObjects"></div>
					</div>
					<div id="imContentGraphics"></div>
					<main id="imContent">
						<a id="imGoToCont"></a>
						<div id="imLoginPage">
						<?php if ($fromCart): ?>
							<h2 id ="imPgTitle" class="imTitleMargin">Schritt 1 - Kundendaten</h2>
							<script>x5engine.boot.push(function () {
							if (x5engine.cart.ui.steps.active) {
								$('#imPgTitle').before(x5engine.cart.ui.getStepStyleDom(0));
							}
							});</script>
						<?php elseif (isset($_GET['cngpwd']) && isset($_GET['cngpwdml'])): ?>
							<h2 id="imPgTitle" class="imTitleMargin">Kennwort zurücksetzen</h2>
							<div style="height: 15px;">&nbsp;</div>
						<?php else: ?>
							<h2 id="imPgTitle" class="imTitleMargin">Geschützter Zugang</h2>
							<div style="height: 15px;">&nbsp;</div>
						<?php endif; ?>
							<?php if (isset($_GET['loginstatus']) && $_GET['loginstatus'] == 1): ?>
							<div class="alert alert-green"><?php echo $pa->messageFromStatusCode(1) ?></div>
							<?php else: ?>
										<div id="imLoginDescription"><?php echo isset($_GET['cart']) ? Configuration::getLocalizations()->get('cart_step2_descr_login', 'To set the order you are required to login or register.' ) : (isset($_GET['cngpwd']) && isset($_GET['cngpwdml']) ? Configuration::getLocalizations()->get('private_area_password_recovery_description', 'Enter new password below.' ) : 'Für den Zugang zu dieser Sektion der Website müssen Sie Ihre Login-Daten eingeben.'); ?></div>
										<div class="imLogin">
											<?php
												if (isset($_GET['loginstatus']) && $pa->messageFromStatusCode($_GET['loginstatus']) != '') {
													echo '<div class="alert alert-' . ($_GET['loginstatus'] >= 0 ? 'green' : 'red') . '">' . $pa->messageFromStatusCode($_GET['loginstatus']) . '</div>';
												}
											?>
											<form method="post" action="imlogin.php" id="imLoginForm">
												<div class="imLoginBlock">
													<label for="imUnameLogin"><span>E-Mail-Adresse:</span></label><br />
													<input type="email" name="imUname" id="imUnameLogin" class="mandatory" autofocus aria-required="true"><br />
												</div>
												<div class="imLoginBlock">
													<label for="imPwdLogin"><span>Passwort:</span></label><br />
													<input type="password" name="imPwd" id="imPwdLogin" class="mandatory" aria-required="true"><br />
												</div>
												<div class="imLoginBlock" style="text-align: right;">
												<input type="button" onclick="location.href='registrierung.html'" value="Registrierung" />&nbsp;
													<input type="submit" value="Eingabe" class="imLoginSubmit">
												</div>
											</form>
											<script>x5engine.boot.push(function() { x5engine.imForm.initForm('#imLoginForm', false, { 'jsid': '872328DADCA5791DE47472D672CFB007', showAll: true, offlineMessage: 'Beim Test der Website werden die geschützten Seiten ohne Abfrage der Zugangsdaten angezeigt. Der reservierte Bereich wird erst mit der Veröffentlichung der Webseite aktiviert.' }); });</script>
										</div>
							<?php endif; ?>
						</div>
						
					</main>
					<div id="imFooterBg"></div>
					<footer id="imFooter">
						<div id="imFooterObjects"><div id="imFooter_imObjectTitle_02_wrapper" class="template-object-wrapper"><div id="imFooter_imObjectTitle_02"><span id ="imFooter_imObjectTitle_02_text" ><a href="nachricht-an-vorstand.html" onclick="return x5engine.utils.location('nachricht-an-vorstand.html', null, false)">Kontakt-Vorstand</a></span></div></div><div id="imFooter_imObjectImage_03_wrapper" class="template-object-wrapper"><div id="imFooter_imObjectImage_03"><div id="imFooter_imObjectImage_03_container"><img src="images/EMAIL.png"  width="30" height="30" />
</div></div></div><div id="imFooter_imObjectTitle_05_wrapper" class="template-object-wrapper"><div id="imFooter_imObjectTitle_05"><span id ="imFooter_imObjectTitle_05_text" ><a href="datenschutz.html" target="_blank">Datenschutzseite</a></span></div></div></div>
					</footer>
				</div>
				<span class="screen-reader-only-even-focused" style="bottom: 0;"><a href="#imGoToCont" title="Lesen Sie den Inhalt der Seite noch einmal durch">Zurück zum Seiteninhalt</a></span>
			</div>
		</div>
		
		<noscript class="imNoScript"><div class="alert alert-red">Um diese Website nutzen zu können, aktivieren Sie bitte JavaScript.</div></noscript>
	</body>
</html>
