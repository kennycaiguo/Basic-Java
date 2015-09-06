//MULTIPLE THREADS DEMO
class Thread1 extends Thread
{
	public void run()
	{
		try
		{
			for(int i=0;i<=10;i++)
			{
				System.out.println("thread1:"+i);
				Thread.sleep(1000);
			}
		}
				catch(Exception e)
			{
					System.out.println(e);
			}
		}
	}
	class Thread2 extends Thread
	{
		public void run()
		{
			try
			{
				for(int i=0;i<=10;i++)
				{
					System.out.println					("thread2:"+i);
					Thread.sleep(4000);
				}
			}
				catch(Exception e)
				{
					System.out.println(e);
				}
			}
		}
		class Thread3 extends Thread
		{
			public void run()
				{
			try
			{
				for(int i=0;i<=10;i++)
				{
					System.out.println					("thread2:"+i);
					Thread.sleep(1000);
				}
			}
				catch(Exception e)
				{
					System.out.println(e);
				}
			}
		}
		public class MultiThreadDemo
			{
			public static void main(String args[])
				{
				Thread1 t1=new Thread1();
				Thread2 t2=new Thread2();
				Thread3 t3=new Thread3();
				t1.start();
				t2.start();
				t3.start();
				}
			}
