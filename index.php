<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ToDo App</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<div class="header">
  <div class="container">
    <div class="row">
      <div class="logo">
        <?php print file_get_contents('images/task.svg'); ?>
      </div>

      <div class="site-title">
        <h2>ToDo Application</h2>
      </div>
    </div>
  </div>

  <div class="nav-bar">
    <div class="page-tabs">
      <button class="dashboard" place="dashboard">Dashboard</button>
      <button class="todo" place="todo">Todo</button>
      <button class="completed" place="completed">Completed</button>
    </div>
  </div>
</div>

<div class="main-content container">
  <?php require 'todo.php'; ?>
</div>

<div class="footer">
  <!-- -->
</div>

<script src="js/jquery-1.12.0.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>