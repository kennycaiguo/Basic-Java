//throw example
class Exce2
{
	static void demo()
	{
		try
		{
			NullPointerException obj=new NullPointerException("My null pointer exception");
			throw(obj);
			//throw new NullPointerException("Mydata");
		}
		catch(NullPointerException ne)
		{
			System.out.println(ne);
		}
	}
	public static void main(String[] args) 
	{
		Exce2.demo();
	}
}
