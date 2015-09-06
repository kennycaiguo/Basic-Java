#include <stdio.h>
#include <math.h>
int main()
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
    printf("%d\t%d\t%d\n",t,h,t);
    scanf("%d",&i);
    return(0);
}
