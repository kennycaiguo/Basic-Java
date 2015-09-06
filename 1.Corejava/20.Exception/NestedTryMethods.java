class NestedTryMethods
{
	static void nestedTry(int no)//Method
	{
		 try
		 {
			 System.out.println("\n INSIDE STATIC METHOD");
				 if(no==1)
					no=no/(no-no);
				 if(no == 2)
				 {
					 int a[] = {55};
					      a[42] = 77;
					 }
				 }

		     catch(Exception e)
				 {
			       System.out.println("from method : : "+e);
				 }   
			}
	   public static void main(String ar[])
	   {
			try
			{
				int n,res;
				  n = ar.length; 
		  	   System.out.println(" No of Command Line Arguments  = "+n);
				   res =  55/n;
			    System.out.println(" Result  = "+res);
	            System.out.println("Before Invloking nestedTry(n) Value of  N = "+n);
				NestedTryMethods.nestedTry(n); 
	  }
	   catch(Exception e)
	   {
		System.out.println("From Main Divide By ZERO "+e);
	   }
	   NestedTryMethods.nestedTry(2);
	}
}
