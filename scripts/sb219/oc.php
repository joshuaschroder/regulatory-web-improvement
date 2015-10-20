<?php
	
	// SET DOCUMENT SPECIFIC VARIABLES HERE
	$article = '5';
	$code = 'Occupations Code';
	$prefix = 'OC';
	
	$chapters = array (
		"110",
		"203",
		"352",
		"353",
		"401",
		"402",
		"403",
		"451",
		"455",
		"502",
		"503",
		"504",
		"505",
		"601",
		"602",
		"603",
		"604",
		"605",
		"701",
		"1952",
		"1953",
		"1954",
		"1955",
		"1958",
		"2152",
	);
	
	// BUILD THE DOM
	include_once('/home/codio/workspace/scripts/simplehtmldom/simple_html_dom.php');	
	$html = file_get_html('http://ecology-sandra.codio.io:3000/scripts/sb219/input/ARTICLE-' . $article. '.htm');
	
	// INITIALIZE GLOBAL VARIABLES
	$titleCode = strtoupper($code);
	$header ="<!DOCTYPE html>\n\t<html>\n\t\t<head>\n\t\t\t<title></title>\n\t\t</head>\n\t<body>\n\t\t<h1>ARTICLE " . $article . " - " . $titleCode . "</h1>\n";
	$footer ="\n\t</body>\n</html>";
	
	// START THE LOOP
	foreach ($chapters as $chapter) {
		
		// Build the output filename
		$file = '/home/codio/workspace/scripts/sb219/output/' .$prefix. '-Chap-' . $chapter . '-SB219.html';
		
		// Search queries to match
		$match1 = "Chapter " . $chapter . ",";
		$match2 = "Section " . $chapter . ".";
		$match3 = "Sections " . $chapter . ".";
		$match4 = "The following provisions of the " .$code . " are repealed";
		
		// Write the header
		file_put_contents($file, $header, FILE_APPEND);
		echo $header;
		
		// Find relevant sections and write to file
		foreach($html->find('section') as $section)  {
			foreach($section->find('h3') as $h3) {
				if (strpos($h3, $match1) !== false || strpos($h3, $match2) !== false || strpos($h3, $match3) !== false || strpos($h3, $match4) !== false)  {
					file_put_contents($file, $section, FILE_APPEND);
					echo $section;
				}
			}
		}
		// Write footer to file
		file_put_contents($file, $footer, FILE_APPEND);
		echo $footer;
		echo "<hr/> Output to " . $file . "<hr/>";
	}
	
?>