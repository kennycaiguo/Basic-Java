<%@ page language="java" contentType="text/html" import="java.sql.*" import="java.sql.Connection" import="java.sql.DriverManager" import="java.io.*"%>
<html>
<head><title>Login</title>
<p align="center">
<b><font size="10" color="yellow" face="Showcard Gothic"> Movenpick<b><font face="Vivaldi" color="yellow" size="6"><u>      truly nature</u></font></b>
</b>
</font>
</p>
</head>
<body background="i.jpg">

<%

Class.forName( "sun.jdbc.odbc.JdbcOdbcDriver" ) ;
Connection conn = DriverManager.getConnection("jdbc:odbc:App1");

Statement stmt = conn.createStatement() ;
String user=request.getParameter("uname");
String roomno=request.getParameter("roomno");

String str="delete from room_booked where user='"+user+"';";
int var=stmt.executeUpdate(str);
System.out.println("1 row deleted");
String strr="update room_details set avail='Yes' where room_no="+roomno+";";
stmt=null;
stmt=conn.createStatement();
stmt.executeUpdate(strr);
	stmt.close();
 	conn.close();
%>
<p align="center"><font color="black" size="7" face="Vivaldi">Your Booking has been Cancelled<br>Click here to go to Homepage<a href="afterlogin.html" color="yellow">Homepage</a></font>

</body>
</html>