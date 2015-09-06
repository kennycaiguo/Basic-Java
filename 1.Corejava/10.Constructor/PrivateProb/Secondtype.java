//second type
class Person
{
	private String name;
	private int age;
	void talk()
	{
		System.out.println("hello I am--->"+name);
		System.out.println("hello my age--->"+age);
	}
}
class Secondtype
{
	public static void main(String args[])
	{
		/*Person p1=new Person();
		p1.talk();*/
		Person p2=new Person();
		p2.name="Teju";
		p2.age=22;
		p2.talk();
	}
}

// Note: Defect in the above program is private variables cannot be initialized second time.

