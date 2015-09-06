// Multilevel inheritance:

class A
{
	void disp1()
	{
		System.out.println("class A method:");
	}
}
class B extends A
{
	void disp2()
	{
		System.out.println("class B method:");
	}
}
class C extends B
{
	void disp3()
	{
		System.out.println("class C method:");
	}
}
class D extends C
{
	void disp4()
	{
		System.out.println("class D method:");
	}
}
class Multilevel
{
	public static void main(String[] args)

	{
		D d=new D();
		d.disp1();
		d.disp2();
		d.disp3();
		d.disp4();
		System.out.println("Hello Madam");
	}
}
