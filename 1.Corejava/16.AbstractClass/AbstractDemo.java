abstract class Car
{
	int regno;
	Car(int regno)
	{
		this.regno=regno;
	}
	void fillTank()  //concrete method
	{
		System.out.println("fill tank");
	}
	abstract void steering(int direction);
	abstract void breaking(int force);
}
abstract class Maruti extends Car
{
	Maruti(int regno)
	{
		super(regno);
	}
  	void steering(int direction)
	{
		System.out.println("regno of maruti="+regno);
		System.out.println("maruti uses manual steering="+direction);
	}	
	void breaking(int force)
	{
		System.out.println("breaking of maruthi="+force);
		System.out.println("maruti uses hydralic breaks");
	}
}
class Santro extends Car
{
	Santro(int regno)
	{
		super(regno);
	}

	void breaking(int force)
	{
		System.out.println("breaking of santro="+force);
		System.out.println("santro useshydralic breaks");
	}
}
class AbstractDemo
{
	public static void main(String args[])
	{
		Santro s=new Santro(999);
		Car c,c1; //reference variables are the variables which holds the object
		System.out.println("maruti car output");
		c=m;
		c.fillTank();
		c.steering(2);
		c.breaking(200);
		System.out.println("--------------------------");
		System.out.println("santro car output");
		c1=s;
		c1.fillTank();
		c1.steering(3);
		c1.breaking(500);
	}
}