import java.io.Serializable;
public class Ctwo2 implements Serializable
{
	public static int a;
	public float b;
	public String c;
	public Ctwo2(int a1,float b1,String c1)
	{
		a=a1;
		b=b1;
		c=c1;
	}
	public void print()
	{
		System.out.println("value of a="+a);
		System.out.println("value of b="+b);
		System.out.println("value of c="+c);
	}
}
