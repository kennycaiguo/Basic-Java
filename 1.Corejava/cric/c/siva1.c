#include<stdio.h>
#include<stdlib.h>
main()
{
int a,c,c1,b,d=0,d1,f,e;
scanf("%d",&c1);
while(d<100)
{
d++;
if(c1==1)
{
a=(int*)malloc(sizeof(int));
b=(int*)malloc(sizeof(int));
c=(int*)malloc(sizeof(int));

a=a%100;
b=b%100;
c=c%100;
if(a<100)
{
d1=a+b*c;
}
f=d1%10;
printf("%d\n",f);
}
free(a);
free(b);
free(c);
}
scanf("%d",&e);
}
