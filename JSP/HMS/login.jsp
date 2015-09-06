<html>
<head>
<p align="center">
<b><font size="10" color="yellow" face="Showcard Gothic"> Movenpick<b><font face="Vivaldi" color="yellow" size="6"><u>      truly nature</u></font></b>
</b>
</font>
</p>
<script>
function check2()
{
var x=document.forms["abc"]["usrname"].value;
if(x=="")
alert("username cant be of null length");
var y=document.forms["abc"]["pwd"].value;
if(y.length<=8)
alert("password cannot be less then 8.please try again");
}
</script>
</head>
<body background="fish.jpg">
<form name="abc" action="checkdb.jsp">
<p align="right">
<font size="5" color="yellow"> 
Username<input type="text" name="usrname"/>
<br>
Password<input type="password" name="pwd"/>
<br>
<input type="submit" value="Sign IN" onclick="check2()"><br><font color="yellow">New user?</font><a href="signup.jsp">Signup</a>
<br>
</p>
<br>
<br>
<br>
<p align="left">
<b><font face="Forte" color="yellow" size="6">
<table border="2" color="green">
<tr>
<td><font face="Forte" color="yellow" size="6">Login</font></td></tr>
</tr>
<tr>
<td><font face="Forte" color="yellow" size="6">Booking</font></td></tr>
<tr>
<td><font face="Forte" color="yellow" size="6">Cancellation</font></td></tr>
<tr>

<tr>
<td><font face="Forte" color="yellow" size="6">Feedback</font></td></tr>
<tr>
<td><font face="Forte" color="yellow" size="6">Contact us</font></td></tr>
</table>
</font>
</b>
</p>

</form>
</body>
</html>
