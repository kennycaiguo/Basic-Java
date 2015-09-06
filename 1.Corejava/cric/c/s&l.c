#include<stdio.h>
#include<stdlib.h>

void dice()
{
int a,b,s=0,c,i=0,x;
while(i<100)
{
printf("enter 1 to throw the dice\n");
scanf("%d",&b);
if(b==1)
{
a=(int*)malloc(sizeof(int));
c=a;
c=c%10;
a=a%6;
printf("%d\n",a);
if((c==2)||(c==6)||(c==8))
{
a=a+1;
}
if(a==0)
{
a=6;
}
printf("You got %d\n",a);
s=s+a;
s=snakes(s);
s=ladders(s);
if(s>100)
{
printf("U cant move\n");
s=s-a;
}
i=s;
printf("Now you are at %d\n",s);
}
else
printf("You entered wrong number\n");
free(a);
}
printf("CONGRATULATIONS!!! YOU REACHED THE GOAL\n");
}
int snakes(int s)
{
if(s==37)
{
printf("sorry! snake caught U\n");
s=16;
}
else if(s==46)
{
printf("sorry! snake caught U\n");
s=26;
}
else if(s==73)
{
printf("sorry! snake caught U\n");
s=47;
}
else if(s==82)
{
printf("sorry! snake caught U\n");
s=8;
}
else if(s==94)
{
printf("sorry! snake caught U\n");
s=55;
}
return s;
}
int ladders(int s)
{
if(s==12)
{
printf("congrats!U caught a ladder\n");
s=29;
}
else if(s==15)
{
printf("congrats!U caught a ladder\n");
s=34;
}
else if(s==38)
{
printf("congrats!U caught a ladder\n");
s=76;
}
else if(s==42)
{
printf("congrats!U caught a ladder\n");
s=60;
}
else if(s==50)
{
printf("congrats!U caught a ladder\n");
s=68;
}
return s;
}
main()
{
int i;
dice();
scanf("%d",&i);
}
