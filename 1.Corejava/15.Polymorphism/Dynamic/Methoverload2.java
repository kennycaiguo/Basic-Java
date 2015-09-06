// Method overloading with the difference in the datatypes:

class Sample
{
	void add(int a,int b)
	{
		System.out.println("sum of the two no's="+(a+b));
	}
	void add(float a,float b)
	{
		System.out.println("sum of the two no's="+(b-a));
	}
}
class Methoverload2
{ 
	public static void main(String args[])
	{
		Sample s=new Sample();
		s.add(10,12);
		s.add(5.6f,6.4f);
	}
}