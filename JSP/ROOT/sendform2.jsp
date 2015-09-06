<%@ page language="java" contentType="text/html" %>
<html>
<head> <title> Send Form demo</title></head><body>
<h1>Welcome
<% 
if(!request.getParameter("user").equals(""))
{
	out.print(request.getParameter("user"));
} 
%>

from 
<%
if(!request.getParameter("land").equals(""))
{
	out.print(request.getParameter("land"));
} 
%>
</br></br>
More details will be send to :
<%
if(!request.getParameter("addr").equals(""))
{
	out.print(request.getParameter("addr"));
} 
%>
</h1>
</body>
</html>