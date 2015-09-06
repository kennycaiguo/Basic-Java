// i) character class:

import java.io.*;
class CharTest
{
	public static void main(String args[]) throws Exception
	{
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		System.out.println("please enter a character");
		char ch=(char)br.read();
		if(Character.isDigit(ch))
			System.out.println("it is a digit");
		else if(Character.isLowerCase(ch))
			System.out.println("it is a small letter");
		else if(Character.isUpperCase(ch))
			System.out.println("the letter is big");
		else if(Character.isSpaceChar(ch))
			System.out.println("it is coming from enter.tab");
		else
			System.out.println("sorry! i dont know the character:");
	}
}