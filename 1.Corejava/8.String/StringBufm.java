class StringBufm
{
	public static void main(String[] args)
	{
		StringBuffer sb=new StringBuffer("Aptech Global Learning Solutions");
		StringBuffer sb1=new StringBuffer("Aptech Global Learning Solutions");
		System.out.println(sb.charAt(7));
		System.out.println(sb.deleteCharAt(5));
		char[] array=new char[10];
		sb1.getChars(0,6,array,0);
		System.out.println(array);
		System.out.println(sb1.length());
		System.out.println(sb1.replace(23,32,"services"));
		sb1.setCharAt(7,'g');
		System.out.println(sb1);
		sb1.setLength(35);
		System.out.println(sb1);
		sb1.setLength(13);
		System.out.println(sb1);
		StringBuffer sb2=new StringBuffer();
		System.out.println(sb2.capacity());
		System.out.println(sb1.capacity());
		String str;
		str=sb1.substring(7);
		System.out.println(str);
		str=sb1.substring(7,13);
		System.out.println(str);
		}
}



