<%@ page language="java" contentType="text/html" import="java.sql.*" import="java.sql.Connection" import="java.sql.DriverManager"%>
<html>
<head><title>Book</title>
<p align="center">
<b><font size="10" color="yellow" face="Showcard Gothic"> Movenpick<b><font face="Vivaldi" color="yellow" size="6"><u>      truly nature</u></font></b>
</b>
</font>
</p>
</head>
<body background="fish.jpg">

<%

Class.forName( "sun.jdbc.odbc.JdbcOdbcDriver" ) ;
Connection conn = DriverManager.getConnection("jdbc:odbc:App1");

Statement stmt = conn.createStatement() ;
String roomtype=request.getParameter("room_type");


String str="select room_no from room_details where room_type='"+roomtype+"' and avail='Yes';";
ResultSet rs=stmt.executeQuery(str);
String user=request.getParameter("usrname");
rs.next();
int roomn=rs.getInt("room_no");

String strr="insert into room_booked values('"+user+"','"+roomn+"');";
stmt=null;
stmt=conn.createStatement();
int var = stmt.executeUpdate(strr);
System.out.println("1 row added");
String str1="update room_details set avail='No' where room_no="+roomn+";";
stmt=null;
stmt=conn.createStatement();
stmt.executeUpdate(str1);
 rs.close();
 stmt.close();
 conn.close();
%>
<p align="center"><font color="yellow" size="7" face="Chiller">Details of Booked Room:<br>Name: <%=user%><br>Room No.: <%=roomn%> <br>Confirmed Booking? <a href="book.html">Book</a></font>


</body>
</html>
