// multiple inheritance by using multiple interface:

interface Father
{
	int prop1=50000;
	float ht1=6.2f;
}
interface Mother
{
	int prop2=30000;
	float ht2=5.4f;
}
class Child implements Father,Mother
{
	void property()
	{
		System.out.println("child property="+(prop1+prop2));
	}
	void height()
	{
		System.out.println("child height="+(ht1+ht2));
	}
}
class Multi
{
	public static void main(String args[])
	{
		Child c=new Child();
		c.property();
		c.height();
	}
}