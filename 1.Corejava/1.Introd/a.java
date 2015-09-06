class s
{
	static void m()
	{
		System.out.println("this is static");
	}

};
class a
{
	public static void main(String ar[])
	{
		s a=new s();
		a.m();
	}
};