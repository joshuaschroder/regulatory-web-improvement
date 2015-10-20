<?php
set_time_limit(600);
include_once('/home/codio/workspace/scripts/simplehtmldom/simple_html_dom.php');

// Set CURL parameters
$ch = curl_init();
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)');
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);




// Load the list of URLs
$urls = file('input.txt', FILE_IGNORE_NEW_LINES);

foreach ($urls as $url) {

	curl_setopt($ch, CURLOPT_URL, $url);
	$html = str_get_html(curl_exec($ch));

	// set the element that you want to find
	$ret = $html->find('h1');
	echo $ret[0]->innertext . "<br>";

}

?>