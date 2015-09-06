import java.awt.*;
import java.awt.event.*;
import java.applet.*;
/*
<applet code="Thr2" width=900 height=600>
</applet>
*/

class Thr2 extends Thread
{
public void init()
{
}
	public void run()
	{
		for(int i=0;i<10;i++)
		{
			try
			{
				Thread.sleep(400);
				System.out.println(i);
			}
			catch(Exception e)
			{
				System.out.println(e);
			}
		}
	}
	public static void main(String args[])
	{
		Thr2 obj=new Thr2();
		Thread t=new Thread(obj);
		t.start();
	}
}
