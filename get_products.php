<?php
// URL of the API endpoint
$apiUrl = "https://gulzarioptics.testspace.click/interface/index.php";

// Prepare the request payload
$requestData = array(
    "jsonrpc" => "2.0",
    "method" => "products.getAllProducts",
    "params" => array(
        "featured" => "",
        "SearchBy" => "",
        "FilterBy" => "",
        "latest" => "",
        "isActive" => "active",
        "catCode" => "optics_frames",
        "model" => "",
        "price_min" => "",
        "price_max" => "",
        "tryon" => "",
        "sale" => "",
        "page" => 1,
        "per_page" => 20,
        "tags_count" => "yes",
        "sub_shopCode" => "gulzarioptics"
    ),
    "id" => "LKlUvgLR"
);

// Initialize a cURL session
$curl = curl_init($apiUrl);

// Set the cURL options
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($requestData)); // Send data as JSON
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

// Execute the cURL request
$response = curl_exec($curl);

// Check for cURL errors
if ($response === false) {
    echo json_encode(array("error" => "Failed to connect to API."));
} else {
    // Output the API response
    echo $response;
}

// Close the cURL session
curl_close($curl);
