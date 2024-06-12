<?php
    $name = $email = $msg = "";
    $nameERR = $emailERR = $msgERR = "";
  
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["name"])) {
            $nameERR = "Required";
        }
        if (empty($_POST["email"])) {
            $emailERR = "Required";
        }
        if (empty($_POST["msg"])) {
          $msg = "Required";
        }
    }
  ?>
