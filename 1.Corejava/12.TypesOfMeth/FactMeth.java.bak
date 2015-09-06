/* 3) Factory Method: returns an object of the class to which it belongs.
      when we use factory method, we cannot use new operator. 
	  A factory method is already available in the class. */


import java.text.*;
class FactMeth
{
	public static void main(String[] args)
	{
		final double PI=(double)22/7;
		double r=54.87;
		double area=PI*r*r;  //area of circle
		System.out.println("Area="+area);
		NumberFormat obj=NumberFormat.getNumberInstance();
		obj.setMaximumFractionDigits(4);
		String str=obj.format(area);
		System.out.println("formatted area="+str);
		obj.setMinimumFractionDigits(6);
		String str1=obj.format(area);
		System.out.println("formatted area="+str1);
	}
}
