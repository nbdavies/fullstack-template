<?php
/**
 * This is a template php file for your countries search.
 * Use as you will, or start over. It's up to you.
 */
 header('Content-Type: application/json');
 
 $term = urldecode($_GET["search_term"]);
 $results = file_get_contents('https://restcountries.eu/rest/v2/name/' . $term);
 # Need to make 3 requests:
 # Results by name: https://restcountries.eu/rest/v2/name/{name}
 # Results by full name: https://restcountries.eu/rest/v2/name/{name}?fullText=true
 # Resilts by code: https://restcountries.eu/rest/v2/alpha/{code}
 # De-duplicate those results
 
 echo json_encode(['results' => $results]);
