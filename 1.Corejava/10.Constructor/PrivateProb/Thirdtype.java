//Third type:
class Person
{
	private String name;
	private int age;
	Person() //default constructor
	{
		name="Teju";
		age=22;
		System.out.println("default constructor");
	}
	void talk()
	{
		System.out.println("hello I am--->"+name);
		System.out.println("hello my age--->"+age);
	}
}
class Thirdtype
{
	public static void main(String args[])
	{
		Person p1=new Person();
		Person p2=new Person();
		p1.talk();
		p2.talk();
	}
}

/* Note: Defect in the above program is a default constructor cannot give
      different set of values. it gives only one set of values.
         If we give two set of values for the same name, then we will get
      the second set of values. This is called as "Overriding". */