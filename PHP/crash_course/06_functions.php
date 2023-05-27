<?php
/* ------------ Functions ----------- */

/*
** Function Syntax
  function functionName($arg1, $arg2, ...) {
    // code to be executed
  }

  - Functions have their own local scope as opposed to global scope
*/

function registerUser()
{
  echo 'User has been registered!';
}

// Running a function
registerUser();

// Adding params
function registerUser2($username)
{
  echo "User $username has been registered!";
}

// Pass in an argument
registerUser2('Brad');

// Returning values
function add($num1, $num2)
{
  return $num1 + $num2;
}

$sum = add(5, 5);
echo $sum;

// Adding default values
function subtract($num1 = 10, $num2 = 5)
{
  return $num1 - $num2;
}

echo subtract();
// echo subtract(55555);
echo('<br><br>');
echo subtract(10, 33);
echo('<br><br>');

// Assigning anonymous functions to variables. Often used for closures and callback functions
$add = function ($num1, $num2) {
  return $num1 + $num2;
};

echo $add(5, 5);
echo('<br><br>');

// Arrow functions
$multiply = fn($num11, $num22) => $num11 * $num22;
// $multiply = fn($arg1, $arg2) => $arg1 * $arg2;

echo $multiply(100, 100);
