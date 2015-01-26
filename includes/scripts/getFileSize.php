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



 foreach ($urls as $url) {
    $ret = remote_filesize($url);
    echo $url;
    echo "----->";
    echo $ret;
    echo '<br/>';


}

?>