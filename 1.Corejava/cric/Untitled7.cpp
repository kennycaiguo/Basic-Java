void field()
{
FILE *b1,*b2;
int user,sys,wkt=0,score_a=0,i=0,j=1,k;
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
}
printf("i=%d\tj=%d\n",i,j);
}
else
{
score_a=score_a+sys;
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
}
