#include<stdio.h>
#include<stdlib.h>
int testandset(int *l)
{
int rv=*l;
*l=1;
return(rv);
}
int main()
{
    int n=2,i=0,key,lock=1,j,wkt=0;
    int waiting[2],TRUE=1,FALSE=0;
do
{
    waiting[i]=TRUE;
    key=TRUE;
    while(waiting[i]&&key)
    key=testandset(&lock);
    waiting[i]=FALSE;
    //critical section
    j=(i+1)%n;
    while((j!=1i)&!waiting[j])
    j=(j+1)%n;
    if(j==1)
    lock=FALSE;
    else
    waiting[j]=FALSE;
    //remaider section
    wkt++;
    printf("hi\n");
}while(wkt!=10);
scanf("%d",&n);
return 0;
}
