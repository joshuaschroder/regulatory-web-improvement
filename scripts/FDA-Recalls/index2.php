<?php

// Create output file
$outFile = "foodalerts.html";
$date ="";
file_put_contents($outFile, '');


// Setup Date Formatting
date_default_timezone_set('America/Chicago');
$today = date('m/d/Y');

//----------------------- FDA Website Food Alerts ---------------------------------//

$headerFDA = "<table class=\"zebra border\">\n<tr>\n<thead>\n<th>Manufacturer</th>\n<th>Report Date</th>\n<th>Reason</th>\n<th>Product</th>\n<th>Link</th>\n</thead>\n</tr>\n<tbody>";
file_put_contents($outFile, $headerFDA, FILE_APPEND);


// Setup the Array
//file_put_contents("fda.csv", file_get_contents("http://www.accessdata.fda.gov/scripts/enforcement/enforce_rpt-Event-Tabs.cfm?csv"));
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
			if ($interval->days < 999) {
				
				// format output
				$manufacturer = htmlspecialchars($manufacturer);
				$reason = htmlspecialchars($reason);
				$desc = htmlspecialchars($desc);								

				// write output to file
				$output = "<tr>\n";
				$output .= "  <td>" . $manufacturer . "</td>\n";
				$output .= "  <td>" . $date . "</td>\n";
				$output .= "  <td>" . $reason . "</td>\n";
				$output .= "  <td>" . $desc . "</td>\n";
				$output .= '  <td> <a title="' . $manufacturer . ' Recall Number ' . $eventID . '" href="' . $hyperlink . '">Recall Number ' . $eventID . '</a></td>';	
				$output .= "</tr>\n";
								
				file_put_contents($outFile, $output, FILE_APPEND);
			}

		}
	}
}

$footerFDA = "</tbody></table>";
file_put_contents($outFile, $footerFDA, FILE_APPEND);

//include '/home/codio/workspace/scripts/mailgun-php/swiftmailer/mailgun_with_swiftmailer.php';

// Garbage Collection
//file_put_contents('fda.csv', '');

?>