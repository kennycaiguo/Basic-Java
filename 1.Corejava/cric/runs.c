#include <stdio.h>
int main()
{
int *p,*r,t,i=0,q,h;
do
{
rep:
r=(int*)malloc(sizeof(int));
t=(*r)%7;
p=(int*)malloc(sizeof(int));
h=(*p)%7;
if((h==0)||(h==6)||(h==8))
{
t=t+1;
}
if(t>=7||t==5)
t=0;
if(q==t)
goto rep;
printf("%d\n",t);
i++;
q=t;
}while(i<20);
scanf("%d",&i);
}
