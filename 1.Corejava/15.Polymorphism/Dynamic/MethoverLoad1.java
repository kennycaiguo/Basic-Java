// Method Overloading with difference in the no of parameters:

class Sample
{
	void add(int a,int b)
	{
		System.out.println("sum of the two no's="+(a+b));
	}
	void add(int a,int b,int c)
	{
		System.out.println("sum of the three no's="+(a+b+c));
	}
}
class MethoverLoad1
{
	public static void main(String args[])
	{
		Sample s=new Sample();
		s.add(10,50);
		s.add(10,50,60);
	}
}