/* 1) Static Methods:does not act upon the instance var of a class. 
      called using 'classname.methodname'. declared using 'static' keyword. */

class Sta
{
     static int a=10;    //static variables
	static void disp()  //static method
	{
		System.out.println("static method called and the value is:"+a);
	}
	public static void main(String[] args)
	{
		Sta.disp();  //classname.methodname
	}
}