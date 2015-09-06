public class PriorityDemo extends Thread
{
	public void run()
	{
		for(int i=0;i<10;i++)
		{
			String str=Thread.currentThread().getName();
			System.out.println(str+":"+i);
		}
	}
	public static void main(String args[])
	{
		PriorityDemo pd1=new PriorityDemo();
		PriorityDemo pd2=new PriorityDemo();
		pd1.setName("first");
		pd2.setName("second");
		pd2.setPriority(MAX_PRIORITY);
		//pd2.setPRIORITY(8);
		pd2.start();
		System.out.println("priority of pd1 is"+pd2.getPriority());
		pd1.setPriority(MIN_PRIORITY);
		pd1.start();
		System.out.println("priority of pd2 is"+pd1.getPriority());
	}
}



