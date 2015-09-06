//Creating a text file and enter the data into the file
import java.io.*;
class Create 
{
	public static void main(String[] args) throws Exception
	{
		DataInputStream dis=new DataInputStream(System.in);
		FileOutputStream fout=new FileOutputStream("MyFile1.txt");
		BufferedOutputStream bout=new BufferedOutputStream(fout);
		char ch;
		System.out.println("Enter data('@'at end):");
		while((ch=(char)dis.read())!='@')
		fout.write(ch);
		fout.close();
	}
}
