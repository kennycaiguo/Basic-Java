#include <stdio.h>
#include <stdlib.h>
int main()
{
    char n1[30],n2[30],f[]="flames",c;
    int count=0,i,j,k=0,r=1;
    FILE *f1,*f2,*ma;
    printf("Enter the first name=");
    scanf("%s",n1);
    printf("Enter the second name=");
    scanf("%s",n2);
    for(i=0;n1[i]!='\0';i++)
    {
        for(j=0;n2[j]!='\0';j++)
        {
            if(n1[i]==n2[j])
            {
            n1[i]='#';
            n2[j]='#';
            }
        }
    }
    for(i=0;n1[i]!='\0';i++)
    {
        if(n1[i]!='#')
        count++;
    }
    for(i=0;n2[i]!='\0';i++)
    {
        if(n2[i]!='#')
        count++;
    }
    f1=fopen("main.txt","r");
    f2=fopen("temp.txt","w");
    j=count%6;
    i=1;
    printf("%d",count);
    while((c=fgetc(f1))!=EOF)
    {
    if(j==(i-1))
    {
    fputc(c,f2);
    while((c=fgetc(f1))!='#'&&r!=5)
    {
    if(c!=EOF)
    {
    fputc(c,f2);
    r++;
    }
    else
    rewind(f1);
    }
    fclose(f2);
    break;
    }
    i++;
    }
    fclose(f1);
    scanf("%d",&i);
    return(0);
}
