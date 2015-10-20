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
    
    <p>This script takes a list of dynamic URLs for PDF documents and outputs the friendly URLs and file sizes.</p>
    <table>
        <tr>
            <th>Dynamic URL</th>            
            <th>Friendly URL</th>
            <th>Size</th>
        </tr>


<?php
$urls = file('input.txt', FILE_IGNORE_NEW_LINES);
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
$ch = curl_init();
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)');
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
foreach($urls as $url) {
    echo "<tr>";
    curl_setopt($ch, CURLOPT_URL, $url);
    $out = curl_exec($ch);
    // line endings is the wonkiest piece of this whole thing
    $out = str_replace("\r", "", $out);
    // only look at the headers
    $headers_end = strpos($out, "\n\n");
    if( $headers_end !== false ) { 
        $out = substr($out, 0, $headers_end);
    }   
    $headers = explode("\n", $out);
    foreach($headers as $header) {
        if( substr($header, 0, 10) == "Location: " ) { 
            $target = substr($header, 10);
            $target = "http://www.dshs.state.tx.us" . $target;
            $target = rtrim($target, "pdf");
            $target = rtrim($target, "doc");
            $target = $target . "pdf";
            $ret = round(remote_filesize($target)/1000) . " KB";
            echo "<td><a href=\"$url\">$url</a></td> <td><a href=\"$target\">$target</td><td>$ret</td>";
            continue 2;
        }   
    }   
    $ret = round(remote_filesize($url)/1000) . " KB";
    echo "<td></td><td><a href=\"$url\">$url</a></td><td>$ret</td>";
    echo "</tr>";
    
}
?>
    
    </table>
</body>
</html>