<?php

$url = 'http://www.dshs.state.tx.us/WorkArea/linkit.aspx?LinkIdentifier=id&amp;ItemID=8589967390';


// By default get_headers uses a GET request to fetch the headers. If you
// want to send a HEAD request instead, you can do so using a stream context:
stream_context_set_default(
    array(
        'http' => array(
            'method' => 'HEAD'
        )
    )
);
$headers = get_headers($url);
var_dump($headers);


?>