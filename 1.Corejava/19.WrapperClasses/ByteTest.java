// ii) Byte class:

import java.io.*;
class ByteTest
{
	public static void main(String args[]) throws Exception
	{
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		System.out.println("enter the first byte number:");
		String s1=br.readLine();
		Byte b1=new Byte(s1);
		System.out.println("entere the second number");
		String s2=br.readLine();
		Byte b2=new Byte(s2);
		int n=b1.compareTo(b2);
		System.out.println("compareTo() method returns the difference between the two numbers(b1-b2)="+n);
		if(n==0)
			System.out.println("both are equal"+b1);
		else if(n>0)
			System.out.println("b1 is bigger"+b1);
		else if(n<0)
			System.out.println("b2 is bigger"+b2);
	}
}
