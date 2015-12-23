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
		
		// Get the file name from the current URL
		$urlParts = explode("/", $url);
		$fileName = basename($urlParts[4], '.shtm') . '.aspx';
		$fileName = "/home/codio/workspace/emstraumasystems/GETAC/" . $fileName;
		
		// Build the header
		$h1 = $html->find('h1.contentTitle');
		$title = $h1[0]->innertext;
		$header =  '<?php' . "\n\t " . '$title= " ' .  "$title" . ' " ; ' . "\n\t" . 'include "/home/codio/workspace/includes/header.html";' .  "\n\t" . 'include "/home/codio/workspace/includes/menus/ems_getac_menu.html"; ' ."\n" . '?>' . "\n\n";
		$content = "";
		
		// Build the content
		$td = $html->find('td');
		foreach ($td as $item) {
			
			// Strip out bad markup
			$badMarkup = array("<span>", "</span>", "<div>", "</div>", "<p>", "</p>");
			$goodMarkup   = array("", "", "", "", "", "<br/>");
			$content = str_replace($badMarkup, $goodMarkup, $content);
			
			// Get TD content and reformat it
			if (strpos($item,'#add8e6') !== false) {
				$content .= "\n\n\t<hr/>\n\t<h2>" . $item->plaintext . "</h2>\n";
				} else {
				$content .= "\t<p>" . $item->innertext . "</p>\n";
			}
		}
		
		// Build the footer
		$footer = '<?php include "/home/codio/workspace/includes/footer.html" ?>';
		
		// Assemble the page
		$pageOutput = $header . $content . $footer;
		
		// Write to file
		$outFile = fopen($fileName, "w") or die("Unable to open file!");
		fwrite($outFile, $pageOutput);
		fclose($outFile);
	}	
	
?>