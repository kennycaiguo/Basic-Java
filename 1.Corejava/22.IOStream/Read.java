//Without using type command Reading data from file
import java.io.*;
class Read
{
	public static void main(String[] args) throws IOException
	{
		FileInputStream fis=new FileInputStream("MyFile1.txt");
		BufferedInputStream bin=new BufferedInputStream(fis);
		int i;
		while((i=bin.read())!=-1)
		System.out.print((char)i);
		bin.close();
	}
}
