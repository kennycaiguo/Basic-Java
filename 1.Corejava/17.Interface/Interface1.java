interface MyInter
{
	void connect();
	void a();
}

	class Oracledb implements MyInter
	{
		public void connect()
		{
			System.out.println("connecting to oracle");
		}
		
	}
	class Sybasedb implements MyInter
	{
		public void connect()
		{
			System.out.println("connecting to Sybase");
		}
	}
	class Interface1
	{
		public static void main(String args[]) 
		{
			Oracledb odb=new Oracledb();
			Sybasedb sdb=new Sybasedb();
			odb.connect();
			sdb.connect();					
		}
	}