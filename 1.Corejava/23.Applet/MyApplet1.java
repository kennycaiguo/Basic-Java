import java.awt.*;
import java.applet.*;
/*<applet code="MyApplet1.class" width=600 height=400></applet>*/
public class MyApplet1 extends Applet
{
	String msg="  ";
	public void init()
	{
	setBackground(Color.pink);
	setForeground(Color.yellow);
	Font f=new Font("Dialog",Font.BOLD,30);
	setFont(f);
	msg+="Init";
	}
	public void start()
	{
		msg+="start";
	}
	public void paint(Graphics g)
	{
		msg+="paint";
		g.drawString(msg,100,100);
	}
	public void stop()
	{
		msg+="stop";
	}
	public void destroy()
	{}
}
