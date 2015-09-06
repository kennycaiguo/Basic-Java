//How to display an instance variables

class Check

{
	int i=10;
	void display()
	{
		System.out.println(i);
	}
	public static void main(String args[])
	{
		Check c=new Check();
		c.display();
	}
}