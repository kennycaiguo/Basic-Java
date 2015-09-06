class ArrSearch
{
public static void main(String args[])
	{
	int array[]={0,11,13,14,15,17,18,19,21,24,26,28,29};
	int low=0;
	int high=array.length-1;
	int searchvalue=11;
	int flag=0;
	while(low<=high)
		{
		int mid=low+(high-low)/2;
		if(searchvalue==array[mid])
			{
			flag=1;
	        System.out.println("element found at index--->"+mid);
			break;
			}
			else if(searchvalue<array[mid])
			{
             high=mid-1;
			}
			else if(searchvalue>array[mid])
			{
				low=mid+1;
			}
		}		
		if(flag==0)
		{
		System.out.println("element not found in the array");
		}
	}
}