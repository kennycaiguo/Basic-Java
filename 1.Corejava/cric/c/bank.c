#include<stdio.h>
struct bank
{
int max[10],need[10],alloc[10];
	int pno,finish;
}p[10];
int main()
{
int a,d,i,j,o=0,t,f,avail[10],work[10],l[10];
printf("\nEnter no of process ");
scanf("%d",&a);
f=a;
 for(i=0;i<a;i++)
{
p[i].finish=0;
 printf("\Enter no of resourses\n");
 scanf("%d",&d);
 for(i=0;i<a;i++)
 {
p[i].pno=i+1;
 p[i].finish=0;
 printf("process %d",i+1);
 printf("\nenter max instances  for process %d",i+1);
 for(j=0;j<d;j++)
 {
scanf("%d",&p[i].max[j]);
printf("\n");
        }
        printf("\nenter allocated instances for process %d ",i+1);
         for(j=0;j<d;j++)
        {
scanf("%d",&p[i].alloc[j]);
printf("\n");
p[i].need[j]=p[i].max[j]-p[i].alloc[j];
        }
    }
}

printf("\nenter avail instances ");
int p1;
for(j=0;j<d;j++)
{
scanf("%d",&avail[j]);
printf("\n");
work[j]=avail[j];
}
for(t=0;t<a;t++)
if(f!=(a+a))
for(i=0;i<a;i++)
{o=0;
if(p[i].finish==0)
{
for(j=0;j<d;j++)
{
if(p[i].need[j]<=work[j])
{
o++;
}
}
if(o==d)
{
for(j=0;j<d;j++)
work[j]+=p[i].alloc[j];
p[i].finish=1;
p[f]=p[i];
f++;
}
}}
printf("\npno\tmax\talloc\tneed\tavail\n");
for(i=0;i<a;i++)
{
printf("%d\t",p[i].pno);
for(j=0;j<d;j++)
printf("%d",p[i].max[j]);
printf("\t");
for(j=0;j<d;j++)
printf("%d",p[i].alloc[j]);
printf("\t");
for(j=0;j<d;j++)
printf("%d",p[i].need[j]);
if(i==0)
{
printf("\t");
for(j=0;j<d;j++)
printf("%d",avail[j]);
}printf("\n");

}
if(f==(a+a))
{printf("\n safe sequence is given below\n");
printf("\npno\tmax\talloc\tneed\tavail\n");
for(i=a;i<f;i++)
{
printf("%d\t",p[i].pno);
for(j=0;j<d;j++)
printf("%d",p[i].max[j]);
printf("\t");
for(j=0;j<d;j++)
printf("%d",p[i].alloc[j]);
printf("\t");
for(j=0;j<d;j++)
printf("%d",p[i].need[j]);
if(i==a)
{

printf("\t");
for(j=0;j<d;j++)
printf("%d",avail[j]);
}
printf("\n");
}
}
else
printf("\nleads to unsafe state\n");
}


