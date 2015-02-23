<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<style>
			body {font-family:Arial; font-size:12px;}
			td {padding:10px;}
			tbody tr:nth-child(odd) {background-color: #ddd;}
		</style>
	</head>
	<body>
    
    <p>This script takes a list of friendly URLs for PDF documents and queries a database to output the dynamic URLs.</p>
    <table>
        <tr>
            <th>Friendly URL</th>
            <th>Dynamic URL</th>            
        </tr>


	<?php

	// Load the Array to Query
	include '/home/codio/workspace/scripts/Get_IDs/haystack.php';

	// Load the file of search terms
	$urls = file('/home/codio/workspace/scripts/Get_IDs/needle.txt', FILE_IGNORE_NEW_LINES);


	//Start the loop
	foreach($urls as $url) {
		$key = array_search ($url, $IDList);
		echo '<tr>';
		echo '<td>' . $url . '</td>';
		echo '<td>' . $key . '</td>';
		echo '</tr>';
	}

	?>
		
	</table>
	</body>
</html>