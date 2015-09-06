
<%@ page language="java" contentType="text/html" import="java.sql.*" import="java.sql.Connection" import="java.sql.DriverManager"%>
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
String user=request.getParameter("usrname");
String password=request.getParameter("pwd");
String name=request.getParameter("name");
String city=request.getParameter("city");
String str="insert into login values('"+name+"','"+city+"','"+user+"','"+password+"');";

int var = stmt.executeUpdate(str);
System.out.println("1 row affected");
      stmt.close() ;
      conn.close() ;
    
%>
<p align="center"><font color="black" size="7" face="Vivaldi">Your Account has been created Successfully!!<br> To log-in<a href="login.jsp" color="yellow">Click Here</a></font>

</body>
</html>