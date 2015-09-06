 <html>
<head>
<p align="center">
<b><font size="10" color="yellow" face="Showcard Gothic"> Movenpick<b><font face="Vivaldi" color="yellow" size="6"><u>      truly nature</u></font></b>
</b>
</font>
</p>

<p align="left">
<b><font face="Forte" color="yellow" size="6">
<table border="2" color="green">
<tr>
<td><a href="reservation.html"><font face="Forte" color="yellow" size="6">Reset</font></a></td></tr>

<tr>
<td><a href="cancel.html"><font face="Forte" color="yellow" size="6">Cancellation</font></a></td></tr>
<tr>

<tr>
<td><a href="feedback.html"><font face="Forte" color="yellow" size="6">Feedback</font></a></td></tr>
<tr>
<td><a href="contact.html"><font face="Forte" color="yellow" size="6">Contact us</font></a></td></tr>
<tr>
<td><a href="main.html" color="yellow"><font face="Forte" color="yellow" size="6">Logout</font></a></td>
</tr>
</table>
</font>
</b>
</p>
<script>
function check1()
{
var z=document.forms["abc"]["pno"].value;

if(z.length!=11)
{
alert("please enter the number starting with '0'or enter 11 numbers including 0"); 
return false;
}
}
</script>
</head>
<body background="nat2.jpg">
<table align="center">
<form name="abc" action="availdb.jsp" >
<tr><td><font face="Times New Roman" color="white" size="4">Username</font></td><td><input type="text" name="usrname"><font face="Times New Roman" color="red" size="4">Name must be same as the 'Login Username'</font</td></tr>

<tr><td><font face="Times New Roman" color="white" size="4">Type of room</font></td><td><select name="room_type" size="1"   for="reservation">
<option> regular non a/c</option>
<option>regular a/c</option>
<option>deluxe a/c></option>
<option>super deluxe</option>
</select></td>
</tr>
<tr>
<td>

<font face="Times New Roman" color="white" size="4">Arrival</font></td><td> <input type="text" name="arrival_date"><font face="Times New Roman" color="red" size="4">Enter the Date in dd/mm/yyyy format</font></td>
</tr>
<tr>
<td>						

<font face="Times New Roman" color="white" size="4">Departure</font></td><td> <input type="text" name="dep_date"><font face="Times New Roman" color="red" size="4">Enter the Date in dd/mm/yyyy format</font></td>
</tr>
<tr>
<td>						
<font face="Times New Roman" color="white" size="4">Adults</font></td><td><select name="no of adults" size="1">

							<option value="1">
							1
							</option>
						
							<option value="2">
							2
							</option>
						
							<option value="3">
							3
							</option>
						
							<option value="4">
							4
							</option>
						
							<option value="5">
							5
							</option>
						
							<option value="6">
							6
							</option>
</select>
 </td>
</tr>
<tr>
<td>
<font face="Times New Roman" color="white" size="4">Children</font></td><td><select name="no of children" size="1">
<option value="1">
							1
							</option>
						
							<option value="2">
							2
							</option>
						
							<option value="3">
							3
							</option>
						
							<option value="4">
							4
							</option>
						
							<option value="5">
							5
							</option>
						
							<option value="6">
							6
							</option>
</select></td>
</tr>
<tr><td></td><td><input type="submit" value="Availability" onclick="check1()" ></td>
</tr>
</form></table></body>
</html>


