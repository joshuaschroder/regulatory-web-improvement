<?php

// Create output file
$outFile = "foodalerts.html";


// Setup Date Formatting
date_default_timezone_set('America/Chicago');
$today = date('m/d/Y');

//----------------------- USDA Website Food Alerts ---------------------------------//

$headingUSDA = "<h2>USDA Food Alerts and Recalls</h2>\n";
file_put_contents($outFile, $headingUSDA);


// Setup the Array
$xml = simplexml_load_file('http://www.fsis.usda.gov/wps/wcm/connect/fsis-content/rss/recalls');
$parsed_results_array = array();

// Data Processing
foreach($xml as $entry) {
    foreach($entry->item as $item) {
		
		// get relevant entries
		$title = $item->title;
		$trimDate = substr_replace($item->pubDate, "", -14);
		$pubDate = DateTime::createFromFormat('Y-m-d', $trimDate);
		$date = $pubDate->format('m/d/Y');
		$desc = $item->description;
		$hyperlink = $item->link;
		$anchorText = explode(" ", $title);;
			
		// determine if post is new
		$date1 = new DateTime($date);
		$date2 = new DateTime($today);
		$interval = $date1->diff($date2);		

		
		// get only Texas alerts and recalls
		if (strpos($title,'Texas') || strpos($desc,'Texas') !== false) {

			// get only recent alerts and recalls
			if ($interval->days < 8) {
				
				// format output
				$title = htmlspecialchars($title);		
				$desc = htmlspecialchars($desc);

				// write output to file
				$output = "<div>\n";
				$output .= "  <strong>Title:</strong> " . $title . "<br/>\n";
				$output .= "  <strong>Report Date:</strong> " . $date . "<br/>\n";
				$output .= "  <strong>Description:</strong> " . $desc . "<br/>\n";
				$output .= '  <strong>Link:</strong> <a title="' . $title . '" href="' . $hyperlink . '">' . "USDA - $anchorText[0] $anchorText[1] $anchorText[2] $anchorText[3]" . '</a><br/>';

				$output .= "\n</div>\n<hr/>\n\n";
								
				
				file_put_contents($outFile, $output, FILE_APPEND);
				
			}
		}
    }
}

$xml = '';

//----------------------- FDA Website Food Alerts ---------------------------------//

$headingFDA = "<h2>FDA Food Alerts and Recalls</h2>\n";
file_put_contents($outFile, $headingFDA, FILE_APPEND);


// Setup the Array
file_put_contents("fda.csv", file_get_contents("http://www.accessdata.fda.gov/scripts/enforcement/enforce_rpt-Event-Tabs.cfm?csv"));
$FDAarray = array_map('str_getcsv', file('fda.csv'));

// Data Processing
foreach ($FDAarray as $key => $val) {
	
	// determine if post is new
	$date1 = new DateTime($date);
	$date2 = new DateTime($today);
	$interval = $date1->diff($date2);
	

	// grab only food alerts
	if ($val['0'] == "Food") {

		// product must be distributed in Texas
		if (strpos($val['9'],'Texas') || strpos($val['9'],'TX') || stripos($val['9'],'nationwide') || strpos($val['5'],'TX') || strpos($val['5'],'Texas') !== false) {

			// get relevant entries
			$eventID = $val['1'];
			$manufacturer = $val['3'];
			$desc = $val['12'];
			$date = $val['18'];
			$reason = $val['16'];

			$week = str_replace('/','',$date);
			$hyperlink = 'http://www.accessdata.fda.gov/scripts/enforcement/enforce_rpt-Event-Detail.cfm?action=detail&id=' . $eventID . '&w=' . $week . '%E2%9F%A8=eng';

			
			// get only recent alerts and updates
			if ($interval->days < 8) {
				
				// format output
				$manufacturer = htmlspecialchars($manufacturer);
				$reason = htmlspecialchars($reason);
				$desc = htmlspecialchars($desc);
				
				// determine if there are multiple products
				$desc = str_replace("; ","</li><li>", $desc);

				// write output to file
				$output = "<div>\n";
				$output .= "  <strong>Manufacturer:</strong> " . $manufacturer . "<br/>\n";
				$output .= "  <strong>Report Date:</strong> " . $date . "<br/>\n";
				$output .= "  <strong>Reason:</strong> " . $reason . "<br/>\n";
				
					// output an ordered list if there are multiple products
					if (strpos($desc,'</li><li>') !== false) {				
						$output .= "  <strong>Products:</strong><ol><li>" . $desc . "</li></ol>\n";
					} else {
						$output .= "  <strong>Product:</strong> " . $desc . "<br/>\n";
					}
				
				$output .= '  <strong>Link:</strong> <a title="' . $manufacturer . ' Recall Number ' . $eventID . '" href="' . $hyperlink . '">' . $manufacturer . ' Recall Number ' . $eventID . '</a><br/>';				
				$output .= "\n</div>\n<hr/>\n\n";
								
				file_put_contents($outFile, $output, FILE_APPEND);
			}

		}
	}
}

include '/home/codio/workspace/scripts/mailgun-php/swiftmailer/mailgun_with_swiftmailer.php';

// Garbage Collection
file_put_contents('fda.csv', '');

?>