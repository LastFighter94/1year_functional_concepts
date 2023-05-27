<?php
/* --- $_GET & $_POST Superglobals -- */

/*
  We can pass data through urls and forms using the $_GET and $_POST superglobals.
*/

// echo $_GET['username'];
$age = 0;

if (isset($_POST['submitForm'])) {
  // $name = htmlspecialchars($_POST['name']);
  // $age = htmlspecialchars($_POST['age']);

  // $name = filter_var($_POST['name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
  // $age = filter_var($_POST['age'], FILTER_SANITIZE_EMAIL);

  $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
  $age = filter_input(INPUT_POST, 'age', FILTER_SANITIZE_EMAIL);


  echo $age, '
  &nbsp;&nbsp;
  &nbsp;&nbsp;
  &nbsp;&nbsp;', $name;
} ?>

<!-- Pass data through a link -->
<a href="<?php echo $_SERVER['PHP_SELF']; ?>?username=Brad">Link</a>


<br><br>

<!-- Pass data through a form -->
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
<div>
  <label>Name: </label>
  <input type="text" name="name">
</div>
<br>
<?php echo $age;?>
<div>
<label>Age: </label>
  <input type="age" name="age">
</div>
<br>
  <input type="submit" name="submitForm" value="Submit">
</form>