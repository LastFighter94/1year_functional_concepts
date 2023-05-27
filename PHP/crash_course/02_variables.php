<?php

/* ----- Variables & Data Types ----- */

/* --------- PHP Data Types --------- */
/*
- String - A string is a series of characters surrounded by quotes
- Integer - Whole numbers
- Float - Decimal numbers
- Boolean - true or false
- Array - An array is a special variable, which can hold more than one value
- Object - A class
- NULL - Empty variable
- Resource - A special variable that holds a resource
*/

/* --------- Variable Rules --------- */
/*
- Variables must be prefixed with $
- Variables must start with a letter or the underscore character
- variables can't start with a number
- Variables can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
- Variables are case-sensitive ($name and $NAME are two different variables)
*/

$name = 'Brad'; // String // Can be single or double quotes
$age = 40; // Integer
$hasKids = true; // Boolean
$cashOnHand = 10.5; //Float

var_dump($cashOnHand);
echo ('<br><br>');
/* --- Adding variables to strings -- */

// Double quotes can be used to add variables to strings
echo "$name is $age years old";
echo ('<br><br>');
// Better to do this ?
echo "${name} is ${age} years old";
echo ('<br><br>');
// Concatenate Strings

echo '<h3>' . $name . ' is ' . $age . ' years old</h3>';
echo ('<br><br>');
// Arithmetic Operators

echo 5 + 5;
echo 10 - 6;
echo 5 * 10;
echo 10 / 2;
echo 10 % 5;

// Constants - Cannot be changed
echo ('<br><br>');
define('HOST', 'localhost');
define('USER', 'root');

var_dump(HOST, USER);

$array = array(
    "foo" => "bar",
    "bar" => "foo",
);

// // as of PHP 5.4
// $array = [
//     "foo" => [
//         "test" => 2,
//         "test2" => 1
//     ],


//     "bar" => "foo",
// ];

// array_push($array,["ddt"=>"123"]);
// $array['newkey'] = 'ekrljerltkj';
// echo '<br><br>';
// print_r($array);
// echo '<br><br>';

// print_r($array);

// echo json_encode($array,JSON_INVALID_UTF8_IGNORE);


// $people = [
//     "yury" => [
//         "age" => 28,
//         "city" => 'Yaroslavl'
//     ],


//     "david" => [
//         "age" => 100,
//         "city" => 'Yaroslavl'
//     ],
// ];

// $a = array();
// $b = $a;
// $b['foo'] = 42;
// echo '<br>';
// var_dump($a);
// echo '<br>';
// var_dump($b);
// echo '<br>';
// var_dump($a);
// echo '<br>';

?>




