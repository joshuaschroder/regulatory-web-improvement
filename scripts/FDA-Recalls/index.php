<?php

include ('/home/codio/workspace/scripts/simplehtmldom/simple_html_dom.php');

// Get the List of Food Alerts URLs from the FDA Website and add them to an array

$html = file_get_html('http://www.fda.gov/Safety/Recalls/');

// create the array and open it for writing
$file = 'array.txt';
$current = file_get_contents($file);

// get the link URLs
$fdalinks = $html->find('tr td[2] a');
foreach ($fdalinks as $element) {
	$url = 'http://www.fda.gov' . $element -> href;

	// write contents to the array
	$current .= "$url\n";
	file_put_contents($file, $current);		
}

//Scrape each URL in the array for meta title, created date, and description

$links = file('array.txt', FILE_IGNORE_NEW_LINES);

// scraping function 
function scrapingMeta($links) {
    
    // create HTML DOM for link pages
    $html = file_get_html($links);

    // get the current URL and wrap in an anchor
    echo '<hr/><h3><a href="' . $links . '" ';
    
    // get the page title
    foreach($html->find('title') as $e) {
		echo 'title="' .$e->innertext .'">';
        echo $e->innertext;
		
        // close the anchor element
        echo '</a></h3>';
    }
    
    // get the posted date 
     foreach($html->find('meta') as $element) {
        if (in_array($element->name, array('posted','Posted','POSTED'))) {
            $value = $element->content;
			echo '<p><strong>Posted On:</strong> ' . $value . '<br/>';
        }  
   }

    // get the meta description
    foreach($html->find('meta') as $element) {
        if (in_array($element->name, array('description','Description'))) {
            $value = $element->content;
            echo '<strong>Description:</strong> ' . $value . '</p>';
        }
    }
    
    $html->clear(); 
}


// -----------------------------------------------------------------------------
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <title></title>
    <style>
    </style>
</head>
<body>

<?php

 foreach ($links as $link) {
    $ret = scrapingMeta($link);
}

file_put_contents("array.txt", "");

?>
    
</body>
</html>  