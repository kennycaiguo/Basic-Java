// single inheritance:

class Teacher
{
	int id;
	String name,addr;
	void setId(int id)
	{
		this.id=id;
	}
	int getId()
	{
		return id;
	}
	void setName(String name)
	{
		this.name=name;
	}
	String getName()
	{
		return name;
	}
	void setAddr(String addr)
	{
		this.addr=addr;
	}
	String getAddr()
	{	
		return addr;
	}
}
class Student extends Teacher
{
	int marks;
	void setMarks(int marks)
	{
		this.marks=marks;
	}
	int getMarks()
	{
		return marks;
	}
}
class Single
{
	public static void main(String args[])
	{
		Student st=new Student();
		st.setId(1);
		st.setName("Teju");
		st.setAddr("Dilsuknagar");
		st.setMarks(600);
		System.out.println("id="+st.getId());
		System.out.println("Name="+st.getName());
		System.out.println("Addr="+st.getAddr());
		System.out.println("Marks="+st.getMarks());
	}
}