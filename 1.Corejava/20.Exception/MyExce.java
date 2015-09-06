//Example for userdefined exception
class MyExce extends Exception 
{
	private static int accno[]={1001,1002,1003,1004};
	private static String name[]={"san","man","van","ran"};
	private static double bal[]={12000,500,75,1999};
	MyExce()
	{}
	MyExce(String str)
	{
		super(str);
	}
	public static void main(String[] args) 
	{
		try
		{
		System.out.println("Accno"+"\t"+"name"+"\t"+"balance");
		for(int i=0;i<4;i++)
			{
			System.out.println(accno[i]+"\t"+name[i]+"\t"+bal			[i]);
			if(bal[i]<2000)
				{
				/*MyExce me=new MyExce("Balance 				amount is less");
				throw(me);*/
				throw new MyExce("Balance amount is 				less");
				}
			}
		}
		catch(MyExce me)
		{
			//System.out.println(me);
			me.printStackTrace();
		}
	}
}
