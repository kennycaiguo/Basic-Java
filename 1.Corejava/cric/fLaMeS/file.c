#include <stdio.h>
#include <stdlib.h>
int main()
{
    char n1[30],n2[30],f[]="flames",c;
    int count=0,i,j,k=0;
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
    j=count%6;
    i=1;
    printf("%d",count);
    while((c=fgetc(f1))!=EOF)
    {
    if(j==(i-1))
    {
    fclose(f1);
    f1=fopen("main.txt","a");
    rewind(f1);
    fseek(f1,j,0);
    fputc('#',f1);
    break;
    }
    }
    f2=fopen("temp.txt","w");
    while((c=fgetc(f1))!='#')
    {
    fputc(c,f2);
    }
    fclose(f2);
    fclose(f1);
    scanf("%d",&i);
    return(0);
}
