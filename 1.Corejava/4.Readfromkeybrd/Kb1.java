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
		String ch1=br.readLine();
		//char ch2[]=(char)ch1;
		int ch2=Integer.parseInt(ch1);
		//float ch2=Float.parseFloat(ch1);
		//double ch1=Double.parseDouble(ch1);
		System.out.println("You have entered-->"+ch1);
		//System.out.println("You have entered-->"+ch2);
		System.out.println("Enter name");
	    String str=br.readLine();
		System.out.println("you have entered --->"+str);
	}
}
