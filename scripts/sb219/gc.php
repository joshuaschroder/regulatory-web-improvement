<?php
	
	$article = '2';
	$code = 'Government Code';
	$prefix = 'GC';
	
	$chapters = array (
	"403",
	"411",
	"531",
	"533",
	"534",
	"535",
	"536",
	"537",
	"538",
	"539",
	"2105",
	"2156",
	);
	
	include_once('/home/codio/workspace/scripts/simplehtmldom/simple_html_dom.php');	
	$html = file_get_html('http://ecology-sandra.codio.io:3000/scripts/sb219/input/ARTICLE-' . $article. '.htm');
	$titleCode = strtoupper($code);
	$header ="<!DOCTYPE html>\n\t<html>\n\t\t<head>\n\t\t\t<title></title>\n\t\t</head>\n\t<body>\n\t\t<h1>ARTICLE " . $article . " - " . $titleCode . "</h1>\n";
	$footer ="\n\t</body>\n</html>";
	
	foreach ($chapters as $chapter) {
		
		$file = '/home/codio/workspace/scripts/sb219/output/' .$prefix. '-Chap-' . $chapter . '-SB219.html';
		$match1 = "Chapter " . $chapter . ",";
		$match2 = "Section " . $chapter . ".";
		$match3 = "Sections " . $chapter . ".";
		$match4 = "The following provisions of the " .$code . " are repealed";
		
		file_put_contents($file, $header, FILE_APPEND);
		echo $header;
		
		foreach($html->find('section') as $section)  {
			foreach($section->find('h3') as $h3) {
				if (strpos($h3, $match1) !== false || strpos($h3, $match2) !== false || strpos($h3, $match3) !== false || strpos($h3, $match4) !== false)  {
					file_put_contents($file, $section, FILE_APPEND);
					echo $section;
				}
			}
		}
		file_put_contents($file, $footer, FILE_APPEND);
		echo $footer;
		echo "<hr/> Output to " . $file . "<hr/>";
	}	
	
?>