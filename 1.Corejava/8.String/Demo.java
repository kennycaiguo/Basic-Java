class Demo
{
public static void main(String args[])
{
String s= "hi";
System.out.println("hash code for string is "+s.hashCode());
String s1= new String("Im Akhil");
System.out.println("first string is "+s);
System.out.println("second string is "+s1);
System.out.println("number of characters in second string including space is "+s1.length());
System.out.println("concatination of 2 strings is"+s.concat(s1));
boolean x=s1.startsWith("akhil");
if(x)
System.out.println("second string starts with akhil");
else
System.out.println("second string doesnot starts with akhil");
String r=s1.toUpperCase();
String t=s1.toLowerCase();
System.out.println("after converting second string to upper case "+r);
System.out.println("after converting to lower case "+t);
System.out.println(s.codePointAt(0));
System.out.println(s.codePointBefore(1));
System.out.println(s.valueOf(s1));
System.out.println(s1.equalsIgnoreCase(r));
System.out.println(s1.equals(r));
}
}



