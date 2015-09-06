//Thread synchronization:
//four threads acting on a single object:
class Reserve implements Runnable
{
	int available=5;
	int wanted;
	Reserve(int i)
	{
		wanted=i;
	}
	public void run()
	{
		synchronized(this)
		{
			System.out.println("the no of births available="+available);
			if(available>=wanted)
			{
				String name=Thread.currentThread().getName();
				System.out.println(wanted+""+"births alloted for"+""+name);
				try
				{
					Thread.sleep(1000);
					available=available-wanted;
				}
				catch(Exception e)
				{}
			}
			else
			{
				System.out.println("sorry no births to allot for next thread");
			}
		}
	}
}
class Thr4
{
	public static void main(String args[])
	{
		Reserve obj=new Reserve(1);
		Thread t1=new Thread(obj);
		Thread t2=new Thread(obj);
		Thread t3=new Thread(obj);
		Thread t4=new Thread(obj);
		//Thread t5=new Thread(obj);
		t1.setName("first thread");
		t2.setName("second thread");
		t3.setName("third thread");
		t4.setName("fourth thread");
		//t5.setName("fifth thread");
		t1.start();
		t2.start();
		t3.start();
		t4.start();
	}
}

