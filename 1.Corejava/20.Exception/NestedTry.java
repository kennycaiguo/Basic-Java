class  NestedTry 
{
	public static void main(String[] args) 
	{
       		 int a=args.length;
		int c[]={1};
		try
		{
			int b=90/2;

			System.out.println("b is :  "+b);
			try
			{
				if (a==1)
				a=a/(a-a);
				System.out.println("a is :  "+a);
				if (a==2)
				c[3]=9;
			}
			catch(ArithmeticException e)
		{
			System.out.println("division by zero :  "+e);
		}
		}
		catch(ArrayIndexOutOfBoundsException e)
		{
			System.out.println("array is out of bounds :  "+e);
		}
	}
}
