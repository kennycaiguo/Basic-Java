                     //Multilevel Inheritance with constructor:

class OneDemo
{
	OneDemo()
	{
	System.out.println("onedemo is Superclass");
	}
}
class TwoDemo extends OneDemo
{
	TwoDemo()
	{
	System.out.println("twodemo is subclass1:");
	}
}
class TDemo extends TwoDemo
{
	TDemo()
	{
	System.out.println("Tdemo is subclass2:");
	}
}
class InheritDemo1
{
	public static void main(String[] args)
	{
		TDemo td=new TDemo();
	}
}

/* Note: Problem in the above program is super class constructor will not be available to subclass.
         To solve this problem we use super keyword in the subclass to call superclass constructor.*/