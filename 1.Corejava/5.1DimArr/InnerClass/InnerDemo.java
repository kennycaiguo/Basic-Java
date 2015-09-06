class BankAcct  //outer class
{
	private double bal;
	BankAcct(double b)
	{
		bal=b;
	}
	void start(double r)
	{
		Interest in=new Interest(r);
		in.calculateInterest();
	}
	private class Interest  //innerclass
	{
		private double rate;
		Interest(double r)
		{
			rate=r;
		}
		void calculateInterest()
		{
			double interest=bal*rate/100;
			System.out.println("interest="+interest);
			bal+=interest;
			System.out.println("balance="+bal);
		}
	}
}
class InnerDemo
{
	public static void main(String[] args)
	{
		BankAcct acct=new BankAcct(100000);
		acct.start(3);
	}
}