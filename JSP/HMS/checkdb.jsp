<%@ page language="java" contentType="text/html" import="java.sql.*" import="java.sql.Connection" import="java.sql.DriverManager"%>
<html>
<head><title>Login</title>
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
ResultSet rs=null;
Statement stmt = conn.createStatement() ;
String userr=request.getParameter("usrname");
String password=request.getParameter("pwd");
String str="select user,password from login where user='"+userr+"' and password='"+password+"';";
rs = stmt.executeQuery(str);
while(rs.next())
{userr=rs.getString("user");
 password=rs.getString("password");
}
rs.close();
stmt.close();
if(userr.equals(request.getParameter("usrname"))&&password.equals(request.getParameter("pwd")))
{%>
<p align="center"><font color="yellow" size="7" face="Chiller">WELCOME <%=userr%>!<br> <a href="afterlogin.html">Click Here to enter the Home page</a></font> 
<%
} else
{%>
<p align="centet"><font color="yellow" size="7" face="Chiller">Invalid User! Please click here to sign up.. <a href="signup.jsp">SignUP</a> 
<%}	
 	conn.close();
%>
</body>
</html>