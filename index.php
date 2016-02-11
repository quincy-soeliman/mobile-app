<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ToDo App</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<div class="header">
  <div class="site-title">
    <h2>ToDo Application</h2>
  </div>

  <div class="nav-bar">
    <div class="page-tabs">
      <button class="dashboard" place="dashboard">
        <?php print file_get_contents('images/home153.svg'); ?>
      </button>
      <button class="todo" place="todo">
        <?php print file_get_contents('images/text70.svg'); ?>
      </button>
      <button class="completed" place="completed">
        <?php print file_get_contents('images/check52.svg'); ?>
      </button>
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