interface First
{
	void display1();
}
	interface Second
	{
		void display2();
	}
	interface Three extends First,Second
	{
		void display3();
	}
	class Inter implements Three
	{
		public void display3()
		{
			System.out.println("Third method");
		}
		public void display1()
		{
			System.out.println("First method");
		}
		public void display2()
		{
			System.out.println("Second method");
		}
	}
	class Interface2
	{
		public static void main(String args[])
		{
			Inter i=new Inter();
			i.display1();
			i.display2();
			i.display3();
		}
	}