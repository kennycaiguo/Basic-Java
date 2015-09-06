//Using transient keyword varfr variable is not serializable
import java.io.*;
public class Ser2
{
	public static void main(String[] args) throws Exception
	{
		Ctwo1 o=new Ctwo1();
		o.varone=20;
		o.vartwo=32.3f;
		o.varthr=new String("hai");
		o.varfr=new Cone();
                FileOutputStream fos=new FileOutputStream("TestSer3.txt");
		ObjectOutputStream oos=new ObjectOutputStream(fos);
		oos.writeObject(o);
	}
}
