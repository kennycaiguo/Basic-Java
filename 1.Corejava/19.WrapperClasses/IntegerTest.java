import java.io.*;
class IntegerTest
{
	public static void main(String args[]) throws Exception
	{
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		System.out.println("enter the number");
		String str=br.readLine();
		int n=Integer.parseInt(str);
		System.out.println("in decimal-->"+n);
		str=Integer.toBinaryString(n);
		System.out.println("in binary-->"+str);
		str=Integer.toHexString(n);
		System.out.println("in hexa decimal-->"+str);
		str=Integer.toOctalString(n);
		System.out.println("in octal number-->"+str);
	}
}
		