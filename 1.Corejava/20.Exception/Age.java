class IllegalValueException extends Exception
{
	IllegalValueException(String a)
	{
		super(a);
	}
}
public class Age 
{
  public void checkAge(int age) throws IllegalValueException
  {
     
        if(age <=0 || age > 100)
       {
                throw new IllegalValueException("Invalid Age");
        }
       else
       {
           System.out.println("Your age is Valid ");
       }
   }
      public static void main(String s[])   
   {
		Age  a = new Age();
		try
		{
		  a.checkAge(142);
		}
		catch(IllegalValueException e)
		{
		   System.out.println("Error in Enter the Age" + e);
		}  
   }
}
 