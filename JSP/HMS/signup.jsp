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
if(y.length<=5)
alert("password cannot be less then 8.please try again");
}
</script>
</head>
<body background="fish.jpg">


<form name="abc" action="storedb.jsp">
<fieldset>
<legend><font size="5" color="yellow">Fill in the Details:</font></legend>
<table align="center">
<tr><td><font size="5" color="yellow">Name</font></td><td><input name="name" type="text"></td></tr> 

<tr><td><font size="5" color="yellow">City</font></td><td><input type="text" name="city"></td></tr>

<tr><td><font size="5" color="yellow">Username</font></td><td><input type="text" name="usrname"/></td></tr>

<tr><td><font size="5" color="yellow">Password</font></td><td><input type="password" name="pwd"/></td></tr>
<tr><td></td><td><input type="submit" value="Submit" onclick="check2()"></td></tr>
</table>

</fieldset>
</form>

</body>
</html>
