//Insert image into Applet
import java.applet.*;
import java.awt.*;
/*<applet code="MyApplet2.class" width=400 height=200>
</applet>*/
public class MyApplet2 extends Applet 
{
	public void init()
	{}
	public void paint(Graphics g)
	{

		Image i=getImage(getDocumentBase(),"OBJECT.gif");
		//move image from left to right
		for(int x=0;x<10;x++)
		{
			g.drawImage(i,x,50,this);
		
		//make time delay
		try
		{
			Thread.sleep(10);
		}
		catch(InterruptedException IE)
		{}
		}
		}
}

