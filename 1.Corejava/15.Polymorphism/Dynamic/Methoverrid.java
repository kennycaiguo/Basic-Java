/* Method overriding: writing two or more methods in the superclass and subclass
                      with same name and signature is called as 'Method overriding'.
					  Method overriding is possible if there is a relation between 
					  superclass and subclass. */
					  
class One
{
	void calculate(double x)
	{
		System.out.println("square="+(x*x));
	}
}
class Two extends One
{
	void calculate(double x)
	{
		super.calculate(2);
		System.out.println("square root value="+Math.sqrt(x));
	}
}
class Methoverrid
{
	public static void main(String args[])
	{
		Two t=new Two();
		t.calculate(25);
		t.calculate(9);
		t.calculate(36);
	}
}