<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style>
        body {font-family:Arial; font-size:12px;}
        td {padding:10px;}
		td.input {background-color: lightgreen;}
        tbody tr:nth-child(odd) {background-color: #eee;}
    </style>
</head>
<body>
    
    <p>This script takes a list of mixed URLs for PDF documents (dynamic and friendly) and outputs the corresponding URLs and file sizes. <br> Green cells indicate the original query.</p>
    <table>
        <tr>
            <th scope="col">Dynamic URL</th>            
            <th scope="col">Friendly URL</th>
            <th scope="col">Size</th>
        </tr>


<?php

/*----------------------------------------------------------------------------------------------*/

// Load the list of URLs
$urls = file('needle.txt', FILE_IGNORE_NEW_LINES);

// Load the Array to Query
include 'haystack/haystack.php';

// Set CURL parameters
$ch = curl_init();
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)');
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


function remote_filesize($url) {
    
    static $regex = '/^Content-Length: *+\K\d++$/im';
    if (!$fp = @fopen($url, 'rb')) {
        return false;
    }
    if (
        isset($http_response_header) &&
        preg_match($regex, implode("\n", $http_response_header), $matches)
    ) {
        return (int)$matches[0];
    }
    return strlen(stream_get_contents($fp));
}

/*----------------------------------------------------------------------------------------------*/

foreach($urls as $url) {
    echo "<tr>";
	
	// Get the page header with CURL
    curl_setopt($ch, CURLOPT_URL, $url);
    $out = curl_exec($ch);
    $out = str_replace("\r", "", $out);
    $headers_end = strpos($out, "\n\n");
    if ($headers_end !== false) { 
        $out = substr($out, 0, $headers_end);
    }   
    $headers = explode("\n", $out);
	
	
    foreach($headers as $header) {

		// If there is a redirect
        if( substr($header, 0, 10) == "Location: " ) { 
			
			// Get the redirect location
            $target = substr($header, 10);
            $target = "http://www.dshs.state.tx.us" . $target;
            $target = rtrim($target, "pdf");
            $target = rtrim($target, "doc");
            $target = $target . "pdf";
			
			// Get the filesize
            $ret = round(remote_filesize($target)/1000) . " KB";
			
			// Output results
            echo "<td class=\"input\"><a href=\"$url\">$url</a></td>"; // Dynamic URL
			echo "<td><a href=\"$target\">$target</td>"; //Friendly URL;
			echo "<td>$ret</td>"; // Filesize
            continue 2;
        }   
    } 
	
	// If there is not a redirect

		// Search the array for a match
		$key = array_search ($url, $IDList);
	
		// Get the filesize
		$ret = remote_filesize($url);
		if (empty($ret)) {
			$ret = '--';
		} else {
			$ret = round($ret/1000) . " KB";	
		}			

		
		// If there is no match in the array, give a not found message
		if (empty($key)) {
			$key = '<i>-- Not Found --</i>';
		} else {
			$key = 'http://www.dshs.state.tx.us/WorkArea/linkit.aspx?LinkIdentifier=id&amp;ItemID=' . $key;
			$key = "<a href=\"$key\">$key</a>";
		}
	
		// Output the results
		$url = "<a href=\"$url\">$url</a>";
		echo "<td>$key</td>"; //Dynamic URL
		echo "<td class=\"input\">$url</td>"; //Friendly URL
		echo "<td>$ret</td>"; // Filesize
		echo "</tr>";
    
}

	// Garbage Collection
	unset	($IDList);
	unset	($urls);
	unset 	($headers);
	unset	($key);
	unset	($target);
	unset	($ret);
?>
    
    </table>
</body>
</html>