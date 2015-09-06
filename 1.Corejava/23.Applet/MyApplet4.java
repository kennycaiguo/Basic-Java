//Draw graphics
import java.awt.Graphics;
import java.awt.Font;
import java.awt.Color;
import java.applet.Applet;
/*<applet code="MyApplet4.class" width=400 height=100>
</applet>*/
public class MyApplet4 extends Applet
{
	public void paint(Graphics g)
	{
	Font f=new Font("Courier",Font.BOLD,16);
	Color c=new Color(200,235,255);
	g.drawLine(10,1,10,60);
	g.drawLine(10,1,60,10);
	g.drawRect(20,20,50,50);
	g.setFont(f);
	g.setColor(c);
	g.drawString("Have a nice Day!",110,50);
}
}