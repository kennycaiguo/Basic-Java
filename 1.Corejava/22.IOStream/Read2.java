//Reading file using FileReader
import java.io.*;
class Read2
{
	public static void main(String[] args) throws IOException
	{
		
		FileReader fr=new FileReader("textfile.txt");
		int ch;
		while((ch=fr.read())!=-1)
		System.out.print((char)ch);
		fr.close();
	}
}
