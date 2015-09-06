// implementing the runnable interface

class Thread1 implements Runnable
{
	String str;
	Thread1(String str)
	{
		this.str=str;
	}
	public void run()
	{
		for(int i=0;i<5;i++)
		{
			System.out.println(str+" "+i);
			try
			{
				Thread.sleep(2000);
			}
			catch(InterruptedException ie)
			{
				//System.out.println(ie);
				ie.printStackTrace();
			}
		}
	}
}
class Thr3 
{
	public static void main(String args[])
	{
		Thread1 obj=new Thread1("cut ticket");
		Thread1 obj1=new Thread1("see movie");
		Thread t1=new Thread(obj);
		Thread t2=new Thread(obj1);
		t1.start();
		t2.start();
	}
}