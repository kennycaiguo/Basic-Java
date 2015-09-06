//Unzip the file contents
import java.io.*;
import java.util.zip.*;
class Unzip
{
	public static void main(String[] args) throws IOException
	{
		FileInputStream fis=new FileInputStream("File2.zip");
		FileOutputStream fos=new FileOutputStream("File3.txt");
		InflaterInputStream iis=new InflaterInputStream(fis);
		int data;
		while((data=iis.read())!=-1)
		fos.write(data);
		fos.close();
	}
}
		