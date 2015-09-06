import java.io.*;
class Stringb
{
public static void main(String args[]) throws Exception
{
BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
System.out.println("enter sur name");
String sur=br.readLine();
System.out.println("enter name");
String name=br.readLine();
StringBuffer sb=new StringBuffer();
sb.append(sur+"");
sb.append(name+"");
System.out.println("full name is "+sb);
System.out.println("in reverse "+sb.reverse());
StringBuffer s=new StringBuffer("im akhil");
System.out.println(s.charAt(4));
System.out.println(s.deleteCharAt(6));
char ar[]=new char[10];
s.getChars(0,5,ar,0);
System.out.println(ar);
System.out.println(s.setCharAt(1,'b'));
System.out.println(s.setLength(15));
System.out.println(s.capacity());
String str;
str=s.subString(4);
System.out.println(str);
}
}
