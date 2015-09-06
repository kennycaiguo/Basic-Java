//passing values from keyboard
import java.io.*;
class Array2
{
	public static void main(String[] args) throws Exception
	{
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		System.out.println("how many subjects");
		int n=Integer.parseInt(br.readLine());
		int marks[]=new int[n];
		for(int i=0;i<n;i++)
		{
			System.out.println("enter marks");
			marks[i]=Integer.parseInt(br.readLine());
		}
		int tot=0;
		System.out.println("the marks are:");
        for(int i=0;i<n;i++)
		{
			System.out.println(marks[i]);
			tot=tot+marks[i];
		}
		System.out.println("total marks="+tot);
		float avg=(float)tot/n;
		System.out.println("average is:"+avg);
		System.out.println("the length of array="+marks.length);
	}
}
		