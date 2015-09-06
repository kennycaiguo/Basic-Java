//difference between '==' and 'equals' methods:
class Str2
{
	public static void main(String args[])
	{
		String s1="APTECH";
		System.out.println("hashcode for s1=--->"+s1.hashCode());
		String s2="APTECH";
		System.out.println("hashcode for s2=--->"+s2.hashCode());
		//if(s1==s2)
			if(s1.equals(s2))
		System.out.println("both are equal");
		else
			System.out.println("both are not equal");
	}
}

					