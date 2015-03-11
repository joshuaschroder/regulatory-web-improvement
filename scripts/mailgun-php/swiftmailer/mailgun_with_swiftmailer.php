<?php 

date_default_timezone_set('America/Chicago');
require 'vendor/autoload.php';

// Create the Transport
$transport = Swift_SmtpTransport::newInstance('smtp.mailgun.org', 25)
  ->setUsername('postmaster@codio.com')
  ->setPassword('a0d925547fd1408c62fad5410eaa417b')
  ;

// Create the Mailer using your created Transport
$mailer = Swift_Mailer::newInstance($transport);

// Create a message
$message = Swift_Message::newInstance('Weekly Food Alerts')
  ->setFrom(array('joshua.schroder@dshs.state.tx.us' => 'Joshua Schroder'))
  ->setTo(array('joshua.schroder@dshs.state.tx.us', 'joshua.schroder@dshs.texas.gov' => 'Josh Schroder'))
  ->setBody("Please see the attached food alerts for this week.\n\nThanks!\nJoshua Schroder")
  ->attach(Swift_Attachment::fromPath('/home/codio/workspace/scripts/FDA-Recalls/foodalerts.html'))
  ;

// Send the message
$result = $mailer->send($message);

?>