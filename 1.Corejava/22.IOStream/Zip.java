//Zipping a file contents
import java.io.*;
import java.util.zip.*;
class Zip 
{
	public static void main(String[] args) throws IOException
	{
		FileInputStream fis=new FileInputStream("MyFile.txt");
		FileOutputStream fos=new FileOutputStream("File2.zip");
		DeflaterOutputStream dos=new DeflaterOutputStream(fos);
		int data;
		while((data=fis.read())!=-1)
		dos.write(data);
		fis.close();
		dos.close();
		fos.close();
	}
}
