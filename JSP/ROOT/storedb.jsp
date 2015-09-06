
<%@ page language="java" contentType="text/html" errorPage="errorpage.jsp" import="java.sql.*"%>
<html>
<head><title>Login</title></head>
<body>

<%

Class.forName( "sun.jdbc.odbc.JdbcOdbcDriver" ) ;
Connection conn =null;
conn= DriverManager.getConnection( "jdbc:odbc:DSN" ) ;
Statement stmt = conn.createStatement() ;
String user=request.getParameter("user");
String country=request.getParameter("land");
String email=request.getParameter("addr");
String str="insert into login values('"+user+"','"+country+"','"+email+"');";
int var=stmt.executeUpdate(str);
System.out.println("1 row affected");
      stmt.close() ;
      conn.close() ;
    
%>
</body>
</html>