<?php

/*----------------------------------------------------------------------------------------------*/

// Load the list of URLs
$urls = file('input.txt', FILE_IGNORE_NEW_LINES);

// Set CURL parameters
$ch = curl_init();
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)');
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

/*----------------------------------------------------------------------------------------------*/

foreach($urls as $url) {
	
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
						
			// Output results
            echo "<td class=\"input\"><a href=\"$url\">$url</a></td>"; // Dynamic URL
			echo "<td><a href=\"$target\">$target</td>"; //Friendly URL;
            continue 2;
        }   
    }     
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