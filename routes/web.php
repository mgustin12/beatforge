<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->group(['prefix' => 'api'], function () use ($app) {
    // Matches The "/api/beats" URL
    $app->get('beats', 'BeatsController@index');
});

$app->get('/', function () use ($app) {
    return view('index');
});
$app->get('/{route1}', function () use ($app) {
    return view('index');
});
$app->get('/{route1}/{route2}', function () use ($app) {
    return view('index');
});
$app->get('/{route1}/{route2}/{route3}', function () use ($app) {
    return view('index');
});