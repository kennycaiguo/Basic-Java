//STRING METHODS

class StringMethod
{
	public static void main(String[] args)
	{
		String str="Aptech Global Learning Solutions";
		String str1="aPTECH GLOBAL LEARNING SOLUTIONS";
		char[] array={'a','p','t','e','c','h',' ','g','l','o','b','a','l'};
		System.out.println(str.codePointAt(0));
		System.out.println(str.codePointBefore(1));
		System.out.println(str.codePointCount(0,5));
		System.out.println(str.startsWith("apt"));
		System.out.println(str.endsWith("tions"));
		System.out.println(str.toUpperCase());
		System.out.println(str.toLowerCase());
		System.out.println(str.valueOf(array));
		System.out.println(str.valueOf(array,7,6));
		char[] array1;
		array1=str.toCharArray();
		System.out.println(str.equalsIgnoreCase(str1));
		System.out.println(str.equals(str1));
	}
}