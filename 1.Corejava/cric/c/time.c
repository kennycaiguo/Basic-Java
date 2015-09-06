#include <stdio.h>
#include <stdlib.h>
void sort(char *s)
{   int i,j;
    char c;
    for(i=0;s[i]!='\0';i++)
    {
    for(j=i+1;s[j]!='\0';j++)
    {
    if(s[j]<s[i])
    {
    c=s[i];
    s[i]=s[j];
    s[j]=c;
    }
    }
    }
}
int main(int argc,char *argv[])
{
    char c,s[10],d[10];
    FILE *mf,*f1,*f2;
    mf=fopen("mf.txt","w");
    f1=fopen("f1.txt","w");
    f2=fopen("f2.txt","w");
    scanf("%s",s);
    fprintf(mf,"%s",s);
    fclose(mf);
    mf=fopen("mf.txt","r");
    while((c=fgetc(mf))!=EOF)
    {
    if((c>='A')&&(c<='Z')||(c>='a')&&(c<='z'))
    fputc(c,f1);
    else
    if((c>='1')&&(c<='9'))
    fputc(c,f2);
    }
    fclose(f1);
    fclose(f2);
    f1=fopen("f1.txt","r");
    f2=fopen("f2.txt","r");
    fscanf(f1,"%s",s);
    fscanf(f2,"%s",d);
    sort(&s);
    fclose(f1);
    f1=fopen("f1.txt","w");
    fprintf(f1,"%s",s);
    fclose(f1);
    sort(&d);
    fclose(f2);
    f2=fopen("f2.txt","w");
    fprintf(f2,"%s",d);
    return(0);
}
