void runs()
{
FILE *b1,*b2;
int user,sys,wkt=0,score=0,i=0,j=1,k;
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
for(k=0;k<11;k++)
if((name[k].out==0)&&(k!=j))
goto xx;
xx:
i=k;
}
else
if(name[j].str==1)
{
printf("%s is out\n",name[j].nam);
printf("%s score:%d\n",name[j].nam,name[j].sc);
name[j].out=1;
for(k=0;k<11;k++)
if((name[k].out==0)&&(k!=i&&k!=j))
goto yy;
yy:
j=k;
}
printf("i=%d\tj=%d\n",i,j);
}
else
{
score=score+user;
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
}
