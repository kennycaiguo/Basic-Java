class Thr1
{
	public static void main(String args[])
	{
		System.out.println("this is the first statement");
		Thread t=Thread.currentThread();
		t.setName("my thread");
		System.out.println(t.isAlive());
		System.out.println("current thread="+t);
	}
}