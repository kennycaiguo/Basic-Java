interface Outer
{
	void display();
		class Inner
		{
			public void test()
			{
				System.out.println("inner class");
			}
		}
}
	class Main implements Outer
	{
		public void display()
		{
			System.out.println("outer interface");
		}
	}
	class Interface3
	{
		public static void main(String args[])
		{
			Main m=new Main();
			m.display();
			Outer.Inner i=new Outer.Inner();
			i.test();
			System.out.println("hello friends");
		}
	}
	