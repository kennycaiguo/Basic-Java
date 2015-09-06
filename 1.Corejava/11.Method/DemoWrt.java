//Method without return type
class Without
{
	double d1,d2;
	Without(double x,double y) //parameter constant
	{
		d1=x;
		d2=y;
	}
	void sum()  //method without return type
	{
		double d3=d1+d2;
		System.out.println("sum="+d3);
	}
}
class DemoWrt
{
	public static void main(String[] args)
	{
		Without s=new Without(10.3,20.5);
		s.sum();
		Without s1=new Without(10.4566,20.55556);
		s1.sum();
	}
}