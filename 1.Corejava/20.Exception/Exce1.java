//handling the exception
class Exce1 
{
	public static void main(String[] args) 
	{
		System.out.println("open the files");
		try
		{
			int n=args.length;
			System.out.println("Number of args are-->"+n);
			int a=45/n;
			System.out.println(a);
		}
		catch(Exception ae)
		{
			System.out.println(ae);
		}
		
		finally
		{
			System.out.println("close the file");
		}
	}
}
