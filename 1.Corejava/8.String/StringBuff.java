/*TYPES OF OBJECTS
--->MUTABLE OBJECTS: These are the objects which can be modified.
--->IMMUTABLE OBJECTS: these are the objects which cannot be modified
*/
import java.io.*;
class StringBuff
{
	public static void main(String[] args) throws Exception
	{
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		System.out.println("enter surname");
		String sur=br.readLine();
		System.out.println("enter mid name");
		String mid=br.readLine();
		System.out.println("enter last name");
		String last=br.readLine();
		String sb=new StringBuffer();
		sb.append(sur+"");
		sb.append(mid+"");
		sb.append(last);
		System.out.println("full name="+sb);
		int n=sur.length();
		//sb.insert(n,last);
		sb.insert(2,"xxxx");
		sb.append(mid);
		System.out.println("\n length="+n);
		System.out.println("after modified="+sb);
		System.out.println("in reverse="+sb.reverse());
	}
}