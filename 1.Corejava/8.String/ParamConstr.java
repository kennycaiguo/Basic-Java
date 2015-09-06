//Solutions for the problems with private

class Constru 
{
	private String a;
	private int b;
	private int c;
	Constru() //default constructor
	{
		a="Teju";
		b=22;
		c=23;
		System.out.println("constructor called");
	}
	Constru(String a,int b)  //parameterized constructor
	{
		this.a=a;
		this.b=b;
	}
	Constru(String a,int b,int c)
	{
		this.a=a;
		this.b=b;
		this.c=c;
	}
	void display()
	{
		System.out.println("hello my name is--->"+a);
		System.out.println("hello my present age is--->"+b);
		System.out.println("hello my coming age is--->"+c);
	}
}
class ParamConstr
{
	public static void main(String[] args)
	{
		Constru c1=new Constru();
		c1.display();
		Constru c2=new Constru();
		c2.display();
		Constru c3=new Constru("Teju",22);
		c3.display();
		Constru c4=new Constru("Sri",23);
		c4.display();
		Constru c5=new Constru("Thejeshvi",21,22);
		c5.display();
		Constru c6=new Constru("Srikanth",22,23);
		c6.display();
	}
}

/* Note: In this program we are able to get different set of values
         by using parameterized constructor even the variables are 
		 declared as private. */