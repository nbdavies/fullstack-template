<?php
/**
 * This is a template php file for your countries search.
 * Use as you will, or start over. It's up to you.
 */
 header('Content-Type: application/json');
 
 $term = urldecode($_GET["search_term"]);
 $name_response = @file_get_contents('https://restcountries.eu/rest/v2/name/' . $term);
 if ($name_response) {
   $name_results = json_decode($name_response, true);
 } else {
   $name_results = array();
 }
 $fullname_response = @file_get_contents('https://restcountries.eu/rest/v2/name/' . $term . '?fullText=true');
 if ($fullname_response) {
   $fullname_results = json_decode($fullname_response, true);
 } else {
   $fullname_results = array();
 }
 $code_response = @file_get_contents('https://restcountries.eu/rest/v2/name/' . $term);
 if ($code_response) {
   $code_results = json_decode($code_response, true);
 } else {
   $code_results = array();
 }
 $unique_results = $name_results + $fullname_results + $code_results;
 # Sort by population
 
 echo json_encode(['results' => $unique_results]);
