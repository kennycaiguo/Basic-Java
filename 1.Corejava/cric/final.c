#include <stdio.h>
#include <stdlib.h>
#include <math.h>
struct ss
{
char nam[20];
int sc,out,str;
}name[11],aut1[11];
int q,score_a=0,score=0,w=0;
void win()
{
w++;
}
int sys_runs()
{
int *p,*r,t,h;
do
{
rep:
r=(int*)malloc(sizeof(int));
t=(*r)%7;
p=(int*)malloc(sizeof(int));
h=(*p)%7;
if((h==0)||(h==8))
{
t=t+1;
}
if(t>=7||t==5)
t=0;
if(q==t)
goto rep;
q=t;
return(t);
}while(1);
}
void runs()
{
win();
FILE *b1,*b2;
int user,sys,wkt=0,i=0,j=1,k;
name[i].str=1;
while(wkt!=10)
{
run1:
printf("enter your number=");
scanf("%d",&user);
if(user==5||user>=7)
goto run1;
sys=sys_runs();
if(sys==user)
{
wkt++;
printf("Wkt lost\n");
if(name[i].str==1)
{
printf("%s is out\n",name[i].nam);
printf("%s score:%d\n",name[i].nam,name[i].sc);
name[i].out=1;
name[i].str=0;
if(i<j)
i=j+1;
else
if(i>j)
i=i+1;
name[i].str=1;
}
else
if(name[j].str==1)
{
printf("%s is out\n",name[j].nam);
printf("%s score:%d\n",name[j].nam,name[j].sc);
name[j].out=1;
name[j].str=0;
if(j<i)
j=i+1;
else
if(j>i)
j=j+1;
name[j].str=1;
}
printf("i=%d\tj=%d\n",i,j);
}
else
{
score=score+user;
if(w==2&&score>score_a)
goto ex;
if(name[i].str==1)
name[i].sc=name[i].sc+user;
else
if(name[j].str==1)
name[j].sc=name[j].sc+user;
if(user%2==1)
{
if(name[i].str==1)
{
name[i].str=0;
name[j].str=1;
}
else
if(name[j].str==1)
{
name[i].str=1;
name[j].str=0;
}
}

}

}
ex:
i=0;
}
void field()
{
win();
FILE *b1,*b2;
int user,sys,wkt=0,i=0,j=1,k;
aut1[i].str=1;
while(wkt!=10)
{
run1:
printf("enter your number=");
scanf("%d",&user);
if(user==5||user>=7)
goto run1;
sys=sys_runs();
if(sys==user)
{
wkt++;
printf("Wkt lost\n");
if(aut1[i].str==1)
{
printf("%s is out\n",aut1[i].nam);
printf("%s score:%d\n",aut1[i].nam,aut1[i].sc);
aut1[i].out=1;
if(i<j)
i=j+1;
else
if(i>j)
i=i+1;
aut1[i].str=1;
}
else
if(aut1[j].str==1)
{
printf("%s is out\n",aut1[j].nam);
printf("%s score:%d\n",aut1[j].nam,aut1[j].sc);
aut1[j].out=1;
if(j<i)
j=i+1;
else
if(j>i)
j=j+1;
aut1[i].str=1;
}
printf("i=%d\tj=%d\n",i,j);
}
else
{
score_a=score_a+sys;
if(w==2&&score_a>score)
goto ex1;
if(aut1[i].str==1)
aut1[i].sc=aut1[i].sc+sys;
else
if(aut1[j].str==1)
aut1[j].sc=aut1[j].sc+sys;
if(user%2==1)
{
if(aut1[i].str==1)
{
aut1[i].str=0;
aut1[j].str=1;
}
else
if(aut1[j].str==1)
{
aut1[i].str=1;
aut1[j].str=0;
}
}

}

}

ex1:
i=0;
}
void team(int ts)
{
switch(ts)
{
case 1:printf("INDIA team:");
       break;
case 2:printf("AUSTRALIA team:");
       break;
case 3:printf("SOUTHAFRICA team:");
       break;
case 4:printf("SRILANKA team:");
       break;
case 5:printf("NEWZEALAND team:");
       break;
case 6:printf("WESTINDIES team:");
       break;
case 7:printf("PAKISTAN team:");
       break;
case 8:printf("ENGLAND team:");
       break;
case 9:printf("DEFENDERS team:");
       break;
default:break;
}
}

int bb()
{
int *p,*r,t,i=0,q,h;
r=(int*)malloc(sizeof(int));
t=(*r)%2;
p=(int*)malloc(sizeof(int));
h=(*p)%10;
if((h==0)||(h==6)||(h==8))
{
t=t+1;
}
return(t);
}

int toss()
{
int *p,*r,t,i=0,q,h;
r=(int*)malloc(sizeof(int));
t=(*r)%2;
p=(int*)malloc(sizeof(int));
h=(*p)%10;
if((h==0)||(h==6)||(h==8))
{
t=t+1;
}
return(t);
}
int rando()
{
int *p,*r,t,i=0,q,h;
r=(int*)malloc(sizeof(int));
t=(*r)%10;
p=(int*)malloc(sizeof(int));
h=(*p)%10;
if((h==0)||(h==6)||(h==8))
{
t=t+1;
}
return(t);
}

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
int t,j,ts=0,tt=0,i=0,count=1,k=0,x,y;
FILE *t1,*t2,*f1,*f2;
char c;
for(i=0;i<11;i++)
{
name[i].sc=0;
name[i].out=0;
name[i].str=0;
aut1[i].out=0;
aut1[i].sc=0;
aut1[i].str=0;
}
//selecting the team
ts=teamselect();
switch(ts)
{
case 1:printf("INDIA team\n");
       t1=fopen("india.txt","r");
       break;
case 2:printf("AUSTRALIA team\n");
       t1=fopen("australia.txt","r");
       break;
case 3:printf("SOUTHAFRICA team\n");
       t1=fopen("southafrica.txt","r");
       break;
case 4:printf("SRILANKA team\n");
       t1=fopen("srilanka.txt","r");
       break;
case 5:printf("NEWZEALAND team\n");
       t1=fopen("newzealand.txt","r");
       break;
case 6:printf("WESTINDIES team\n");
       t1=fopen("westindies.txt","r");
       break;
case 7:printf("PAKISTAN team\n");
       t1=fopen("pakistan.txt","r");
       break;
case 8:printf("ENGLAND team\n");
       t1=fopen("england.txt","r");
       break;
case 9:printf("DEFENDERS team\n");
       t1=fopen("defenders.txt","r");
       break;
default:break;
}
while((c=fgetc(t1))!=EOF)
{
printf("%c",c);
}
tt=rando()%10;
while(tt==ts)
{
tt=rando()%10;
}
printf("select the team players(using specified numbers)\n");
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
for(i=0;i<11;i++)
{
scanf("%d",&temp[i]);
}
for(i=0;i<11;i++)
{
aut[i]=temp[i];
}
for(i=-1;i<11;i++)
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
if((c>='A'&&c<='Z')||(c>='a'&&c<='z')||(c==' '))
{
name[i].nam[j]=c;
j++;
}
}
name[i].nam[j]='\0';
}
}
rewind(t1);
count=1;
k=0;
}
for(i=0;i<11;i++)
printf("%s\n",name[i].nam);
f1=fopen("team1.txt","w");
for(i=0;i<11;i++)
{
fprintf(f1,"%s\n",name[i].nam);
}
for(i=-1;i<11;i++)
{
while(((c=fgetc(t2))!=EOF)&&(k!=1))
{ 
if(c=='\n')
count++;
if(count==temp[i])
{
k=1;
j=0;
while((c=fgetc(t2))!='\n')
{
if((c>='A'&&c<='Z')||(c>='a'&&c<='z')||(c==' '))
{
aut1[i].nam[j]=c;
j++;
}
}
aut1[i].nam[j]='\0';
}
}
rewind(t2);
count=1;
k=0;
}
for(i=0;i<11;i++)
printf("%s\n",aut1[i].nam);
f2=fopen("team2.txt","w");
for(i=0;i<11;i++)
{
fprintf(f2,"%s\n",aut1[i].nam);
}
t=toss();
printf("Toss:\n");
t++;
printf("1.Head\n2.Tail\n");
scanf("%d",&i);
if(i==t)
{
team(ts);
printf("Won the Toss\n");
printf("1.Bat\n2.Bowl\n");
scanf("%d",&i);
if(i==1)
{
team(ts);
printf("Elected to Bat\n");
runs();
x=ts;
y=tt;
field();
}
else
{
team(ts);
printf("Elected to Bowl\n");
field();
y=tt;
x=ts;
runs();
}
}
else
{
team(ts);
printf("Loss the Toss\n");
i=bb();
i++;
if(i==1)
{
team(tt);
printf("Elected to Bat\n");
field();
y=tt;
x=ts;
runs();
}
else
{
team(tt);
printf("Elected to Bowl\n");
runs();
x=ts;
y=tt;
field();
}
}
printf("Final scores:\n");
team(x);
printf("Score=%d\n",score);
team(y);
printf("Score=%d\n",score_a);
if(score>score_a)
{
team(ts);
printf("Won\n");
}
else
if(score<score_a)
{
team(tt);
printf("Won\n");
}
else
printf("Tie\n");

scanf("%d",&i);
return(0);
}
