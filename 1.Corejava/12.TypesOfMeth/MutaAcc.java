/* 2)Instance Method: act upon the instance var of a class. called using 'objname.methname'.
     i)Accessor Method: access or read the instannce var
	 ii)Mutator Method: not only read the instance var 
	    but also modifies the content of the object. */

class Inst
{
	String name;
	int age;
	char sex;
	Inst(String name,int age,char sex)
	{
		this.name=name;
		this.age=age;
		this.sex=sex;
	}
	//Accessor Method
	void disp()
	{
		System.out.println("name--->"+name);
		System.out.println("age--->"+age);
		System.out.println("sex--->"+sex);
	}
	//Mutator Method
	Inst modify(Inst obj)
	{
		obj.name="Teju";
		obj.age=21;
		obj.sex='f';
		return obj;
	}
}
	class MutaAcc
	{
		public static void main(String[] args)
		{
			Inst ins1=new Inst("Sri",23,'m');
			ins1.disp();
			Inst ins2=ins1.modify(ins1);  //not creating object to ins2
			ins2.disp();
			//ins1.disp();
		}
	}