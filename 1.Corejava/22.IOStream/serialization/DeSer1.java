//DeSerialization Demo
import java.io.*;
public class DeSer1
{
	public static void main(String[] args) throws Exception
	{
		Ctwo o=null;
		FileInputStream fis=new FileInputStream("TestSer2.txt");
		ObjectInputStream ois=new ObjectInputStream(fis);
		o=(Ctwo)ois.readObject();
		System.out.println(o.varone);
		System.out.println(o.vartwo);
		System.out.println(o.varthr);
                                     //System.out.println(o.varfr); 
 
	}
}
