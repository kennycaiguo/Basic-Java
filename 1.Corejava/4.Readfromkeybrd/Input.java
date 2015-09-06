//Accepting data from keyboard
import java.io.*;
class Kb1 
{
	public static void main(String[] args) throws Exception
	{
		/*InputStreamReader obj=new InputStreamReader(System.in);
		BufferedReader br=new BufferedReader(obj);*/

		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
			
		System.out.println("Enter age");
		
		int ch2=Integer.parseInt(br.readLine());
		
	}
}
