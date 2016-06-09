<?php
$to = $_POST['email'];

$url = "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

$subject="Medium Like";
$message="You have subscribed to:".$url;
$retval = mail($to,$subject,$message);

?>

<div style="text-align: center; margin-top: 50px;">
    <h1 style="color: red;">thanks for subscribing</h1>
</div>

<script type="text/javascript">
	setTimeout(function() {
		window.location.href = "http://jovanasunjka.dx.am/Develomon-test";
	}, 2000);
</script>