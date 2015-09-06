//Metod with return type
class With
{
	double d1,d2;
	With(double x,double y)
	{
		d1=x;
		d2=y;
	}
	double sum()
	{
		//double d3=d1+d2;
		//return d3;
		return d1+d2;
	}
}
class Demowith
{
	public static void main(String[] args)
	{
		With s1=new With(10.3,20.5);
		System.out.println("sum="+s1.sum());
		With s2=new With(23.5,12.6);
		System.out.println("sum="+s2.sum());
	}
}