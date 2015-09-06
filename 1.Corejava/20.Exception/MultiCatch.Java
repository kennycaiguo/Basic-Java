//Multiple catch 
class MultiCatch
{
	public static void main(String args[])
	{
		try
		{
			int a = args.length;
			
			System.out.println("No of Command Line 			Arguments = "+a);
			int b = 10/a;
			System.out.println("After Div value ="+b);
			int c[] = {10,20,30,40,50,60};
			c[31] = 789;
			for(int i=0;i<c.length;i++)
			System.out.println(c[i]);
			}
		
		catch(ArrayIndexOutOfBoundsException e)
		{
			System.out.println("Array Index Violation "+e);
		}
					
		catch(ArithmeticException e)
		{
			System.out.println("Divide by zero"+e);
		}

		catch(Exception e)
		{
			System.out.println(" from Super class Exception 		"+e);
		}
		
       		finally
		{
			System.out.println("after Catch");
        		}
	}
}