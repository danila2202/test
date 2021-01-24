<?php
$fname = $_POST['fname'];
$lname = $_POST['lname']
$number = $_POST['number'];
$fname = htmlspecialchars($fname);
$lname = htmlspecialchars($lname);
$number = htmlspecialchars($number);
$fname = urldecode($fname);
$lname = urldecode($lname);
$number = urldecode($number);
$fname = trim($fname);
$lname = trim($lname);
$number = trim($number);
//echo $fio;
//echo "<br>";
//echo $email;
$from
$headers = "From:" . $from;
$AllInOne =  $fName.$lname.$number;
mail("danila.nik.23@mail.ru", "Заявка с сайта",$AllInOne ));
 
}?>

<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://epicblog.net/index.php");}
window.setTimeout("changeurl();",3000);
</script>