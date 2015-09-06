//Serialization Demo
import java.io.*;
public class Ser1
{
	public static void main(String[] args) throws Exception
	{       //Cone o=new Cone();
		Ctwo o=new Ctwo();
		o.varone=10;
		o.vartwo=22.5f;
		o.varthr=new String("Hello");
		FileOutputStream fos=new FileOutputStream("TestSer2.txt");
		ObjectOutputStream oos=new ObjectOutputStream(fos);
		oos.writeObject(o);
		}
}
