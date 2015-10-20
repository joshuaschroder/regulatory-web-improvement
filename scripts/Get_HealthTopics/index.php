<?php
	
	include_once('/home/codio/workspace/scripts/simplehtmldom/simple_html_dom.php');
	$html = file_get_html('input.html');
	$file = 'output.html';
	
	$header= "<html>
					<head>
						<style>
							body {font-family:verdana;}
							td {font-size:75%;}
							tr:nth-child(even) {background: #DDD}
							tr:nth-child(odd) {background: #FFF}
							td {padding:10px;}
						</style>
					</head>
				<body>";
								
	file_put_contents($file, $header);
	echo $header;
	
	$heading = "<h2>Health Facilities</h2>";
	$thead = "<table>
						<tr>
							<th style=\"width:45%\">Topic</th>
							<th style=\"width:20%\">Program</th>
							<th style=\"width:15%\">Contact</th>
							<th style=\"width:20%\">Phone</th>
						</tr>";
	
	// Output rows
	echo $heading;
	file_put_contents($file, $heading, FILE_APPEND);
	echo $thead;
	file_put_contents($file, $thead, FILE_APPEND);
	
	// Get the entire table
	foreach($html->find('table[class*="zebraBorder"]') as $table) {
		
		//Get the table rows
		foreach($table->find('tr') as $row) {
			
			// Get the second table cell
			foreach ($row->find('td[2]') as $cell) {
				
				// If table cell contains this text...
				if (
					strpos ($cell, 'Facility') || 
					strpos ($cell, 'Architectural') || 
					strpos ($cell, 'Substance Abuse Compliance Group') 
					!== false) {
					
					// Strip tabs from table rows
					$row = trim(preg_replace('/\t+/', '', $row));
					
					// Fix relative URLs so that they work on test domain
					$row = str_replace('href="/', 'href="http://www.dshs.state.tx.us/', $row);
					echo $row;
					file_put_contents($file, $row, FILE_APPEND);
				} 
			}
		} 
	}
	$tclose="</table>";
	echo $tclose;
	file_put_contents($file, $tclose, FILE_APPEND);
	
	$heading = "<h2>Food, Drug, and Medical Devices</h2>";
	$thead = "<table>
						<tr>
							<th style=\"width:45%\">Topic</th>
							<th style=\"width:20%\">Program</th>
							<th style=\"width:15%\">Contact</th>
							<th style=\"width:20%\">Phone</th>
						</tr>";
	
	// Output rows
	echo $heading;
	file_put_contents($file, $heading, FILE_APPEND);
	echo $thead;
	file_put_contents($file, $thead, FILE_APPEND);
	
	// Get the entire table
	foreach($html->find('table[class*="zebraBorder"]') as $table) {
		
		//Get the table rows
		foreach($table->find('tr') as $row) {
			
			// Get the second table cell
			foreach ($row->find('td[2]') as $cell) {
				
				// If table cell contains this text...
				if (
				strpos ($cell, 'Environmental and Consumer Safety') ||
				strpos ($cell, 'Food') ||
				strpos ($cell, 'Drug') ||
				strpos ($cell, 'Medical Device') ||
				strpos ($cell, 'Meat') ||
				strpos ($cell, 'Seafood') ||
				strpos ($cell, 'Milk')
				!== false) {
					
					// Strip tabs from table rows
					$row = trim(preg_replace('/\t+/', '', $row));
					
					// Fix relative URLs so that they work on test domain
					$row = str_replace('href="/', 'href="http://www.dshs.state.tx.us/', $row);
					echo $row;
					file_put_contents($file, $row, FILE_APPEND);
				} 
			}
		} 
	}
	$tclose="</table>";
	echo $tclose;
	file_put_contents($file, $tclose, FILE_APPEND);

	$heading = "<h2>Environmental Health</h2>";
	$thead = "<table>
						<tr>
							<th style=\"width:45%\">Topic</th>
							<th style=\"width:20%\">Program</th>
							<th style=\"width:15%\">Contact</th>
							<th style=\"width:20%\">Phone</th>
						</tr>";
	
	// Output rows
	echo $heading;
	file_put_contents($file, $heading, FILE_APPEND);
	echo $thead;
	file_put_contents($file, $thead, FILE_APPEND);
	
	// Get the entire table
	foreach($html->find('table[class*="zebraBorder"]') as $table) {
		
		//Get the table rows
		foreach($table->find('tr') as $row) {
			
			// Get the second table cell
			foreach ($row->find('td[2]') as $cell) {
				
				// If table cell contains this text...
				if (
				strpos ($cell, 'Environmental Hazards') ||
				strpos ($cell, 'Environmental Hazardous') ||
				strpos ($cell, 'Chemical & Product Safety') ||
				strpos ($cell, 'Sanitation Licensing') ||
				strpos ($cell, 'Public Health Sanitation') ||
				strpos ($cell, 'Environmental Health')
				!== false) {
					
					// Strip tabs from table rows
					$row = trim(preg_replace('/\t+/', '', $row));
					
					// Fix relative URLs so that they work on test domain
					$row = str_replace('href="/', 'href="http://www.dshs.state.tx.us/', $row);
					echo $row;
					file_put_contents($file, $row, FILE_APPEND);
				} 
			}
		} 
	}
	$tclose="</table>";
	echo $tclose;
	file_put_contents($file, $tclose, FILE_APPEND);

	$heading = "<h2>Radiation Control</h2>";
	$thead = "<table>
						<tr>
							<th style=\"width:45%\">Topic</th>
							<th style=\"width:20%\">Program</th>
							<th style=\"width:15%\">Contact</th>
							<th style=\"width:20%\">Phone</th>
						</tr>";
	
	// Output rows
	echo $heading;
	file_put_contents($file, $heading, FILE_APPEND);
	echo $thead;
	file_put_contents($file, $thead, FILE_APPEND);
	
	// Get the entire table
	foreach($html->find('table[class*="zebraBorder"]') as $table) {
		
		//Get the table rows
		foreach($table->find('tr') as $row) {
			
			// Get the second table cell
			foreach ($row->find('td[2]') as $cell) {
				
				// If table cell contains this text...
				if (
				strpos ($cell, 'Machine Source') ||
				strpos ($cell, 'Radioactive Material') ||
				strpos ($cell, 'Radiation Group') ||
				strpos ($cell, 'X-Ray Group') ||
				strpos ($cell, 'Environmental Monitoring Group') ||
				strpos ($cell, 'Mammography Group') 
				!== false) {
					
					// Strip tabs from table rows
					$row = trim(preg_replace('/\t+/', '', $row));
					
					// Fix relative URLs so that they work on test domain
					$row = str_replace('href="/', 'href="http://www.dshs.state.tx.us/', $row);
					echo $row;
					file_put_contents($file, $row, FILE_APPEND);
				} 
			}
		} 
	}
	$tclose="</table>";
	echo $tclose;
	file_put_contents($file, $tclose, FILE_APPEND);

	$heading = "<h2>EMS / Trauma Systems</h2>";
	$thead = "<table>
						<tr>
							<th style=\"width:45%\">Topic</th>
							<th style=\"width:20%\">Program</th>
							<th style=\"width:15%\">Contact</th>
							<th style=\"width:20%\">Phone</th>
						</tr>";
	
	// Output rows
	echo $heading;
	file_put_contents($file, $heading, FILE_APPEND);
	echo $thead;
	file_put_contents($file, $thead, FILE_APPEND);
	
	// Get the entire table
	foreach($html->find('table[class*="zebraBorder"]') as $table) {
		
		//Get the table rows
		foreach($table->find('tr') as $row) {
			
			// Get the second table cell
			foreach ($row->find('td[2]') as $cell) {
				
				// If table cell contains this text...
				if (strpos ($cell, 'EMS') !== false) {
					
					// Strip tabs from table rows
					$row = trim(preg_replace('/\t+/', '', $row));
					
					// Fix relative URLs so that they work on test domain
					$row = str_replace('href="/', 'href="http://www.dshs.state.tx.us/', $row);
					echo $row;
					file_put_contents($file, $row, FILE_APPEND);
				} 
			}
		} 
	}
	$tclose="</table>";
	echo $tclose;
	file_put_contents($file, $tclose, FILE_APPEND);
	
	$heading = "<h2>Professional Licensing</h2>";
	$thead = "<table>
						<tr>
							<th style=\"width:45%\">Topic</th>
							<th style=\"width:20%\">Program</th>
							<th style=\"width:15%\">Contact</th>
							<th style=\"width:20%\">Phone</th>
						</tr>";
	
	// Output rows
	echo $heading;
	file_put_contents($file, $heading, FILE_APPEND);
	echo $thead;
	file_put_contents($file, $thead, FILE_APPEND);
	
	// Get the entire table
	foreach($html->find('table[class*="zebraBorder"]') as $table) {
		
		//Get the table rows
		foreach($table->find('tr') as $row) {
			
			// Get the second table cell
			foreach ($row->find('td[2]') as $cell) {
				
				// If table cell contains this text...
				if (
					strpos ($cell, 'Professional Licensing') ||
					strpos ($cell, 'Substance Abuse Regulatory') 
					!== false) {
					
					// Strip tabs from table rows
					$row = trim(preg_replace('/\t+/', '', $row));
					
					// Fix relative URLs so that they work on test domain
					$row = str_replace('href="/', 'href="http://www.dshs.state.tx.us/', $row);
					echo $row;
					file_put_contents($file, $row, FILE_APPEND);
				} 
			}
		} 
	}
	$tclose="</table>";
	echo $tclose;
	file_put_contents($file, $tclose, FILE_APPEND);

	
	
	$footer = "</body>\n</html>";
	echo $footer;
	file_put_contents($file, $footer, FILE_APPEND);
	
?>