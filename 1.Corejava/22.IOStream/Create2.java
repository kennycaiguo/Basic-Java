//Using Writer create and pass the data into the file
import java.io.*;
class Create2
{
	public static void main(String[] args) throws IOException
	{
		String str="hai friends";
		FileWriter fw=new FileWriter("textfile1.txt",false);
		BufferedWriter bw=new BufferedWriter(fw);
		for(int i=0;i<str.length();i++)
		bw.write(str.charAt(i));
		bw.close();
	}
}
