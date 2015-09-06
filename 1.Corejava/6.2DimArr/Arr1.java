//two dimensional array
class Arr1
{
	public static void main(String[] args)
	{
		int x[][]={{23,56,47},{26,24},{12,56,64}};
		System.out.println("in matrix form:");
		for(int i=0;i<3;i++)
		{
			for(int j=0;j<3;j++)
			{
				System.out.print(x[i][j]+"\t");
			}
			System.out.println();
		}
	}
}