class ThreadSleep
{
	public static void main(String args[])
	{
		for(int i=0;i<=5;i++)
		{
			try
			{
				Thread.sleep(2000);
				System.out.println("Thread is:"+i);
			}
			catch(Exception e)
			{
				System.out.println(e);
			}
		}
	}
}