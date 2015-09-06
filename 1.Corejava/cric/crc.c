#include <stdio.h>
#include <stdlib.h>
#include <math.h>
int teamselect()
{
int c;
label:
printf("Select the team:\n");
printf("1.India\n2.Australia\n3.South Africa\n4.Srilanka\n5.Newzealand\n6.Westindies\n7.Pakistan\n8.England\n9.Defenders\n");
printf("Enter the number to select the team=");
scanf("%d",&c);
if(c>=10)
{
printf("select the correct number\n");
goto label;
}
return(c);
}
int main()
{
int temp[11],aut[11];
int j,ts,tt,i=0,count=1,k=0;
FILE *t1,*t2;
char c;
char name[11][20];
//selecting the team
ts=teamselect();
switch(ts)
{
case 1:t1=fopen("india.txt","r");
       break;
case 2:t1=fopen("australia.txt","r");
       break;
case 3:t1=fopen("southafrica.txt","r");
       break;
case 4:t1=fopen("srilanka.txt","r");
       break;
case 5:t1=fopen("newzealand.txt","r");
       break;
case 6:t1=fopen("westindies.txt","r");
       break;
case 7:t1=fopen("pakistan.txt","r");
       break;
case 8:t1=fopen("england.txt","r");
       break;
case 9:t1=fopen("defenders.txt","r");
       break;
default:break;
}
tt=rand()%10;
while(tt!=ts)
{
tt=rand()%10;
}
switch(tt)
{
case 1:t2=fopen("india.txt","r");
       break;
case 2:t2=fopen("australia.txt","r");
       break;
case 3:t2=fopen("southafrica.txt","r");
       break;
case 4:t2=fopen("srilanka.txt","r");
       break;
case 5:t2=fopen("newzealand.txt","r");
       break;
case 6:t2=fopen("westindies.txt","r");
       break;
case 7:t2=fopen("pakistan.txt","r");
       break;
case 8:t2=fopen("england.txt","r");
       break;
case 9:t2=fopen("defenders.txt","r");
       break;
default:break;
}
while((c=fgetc(t1))!=EOF)
{
printf("%c",c);
}
printf("select the team players(using specified numbers)\n");
for(i=0;i<11;i++)
{
scanf("%d",&temp[i]);
}
for(i=0;i<11;i++)
{
aut[i]=temp[i];
}
for(i=0;i<11;i++)
{
while(((c=fgetc(t1))!=EOF)&&(k!=1))
{ 
if(c=='\n')
count++;
if(count==temp[i])
{
k=1;
j=0;
while((c=fgetc(t1))!='\n')
{
name[i][j]=c;
j++;
}
name[i][j]='\0';
}
}
rewind(t1);
count=1;
k=0;
}
for(i=0;i<11;i++)
printf("%s",name[i]);
scanf("%d",&i);
return(0);
}
