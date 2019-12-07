class CircleExpandEffect extends GameObject
{

    private Radius:number;
    private Color:number;

    static Max:number = 30;
    NowFrame:number;

    constructor( PosX:number, PosY:number, Radius:number, Color:number=0xffffff) 
    {
        super();
        this.NowFrame = CircleExpandEffect.Max;
        this.Radius = Radius;
        this.Color = Color;
        this.Shape=new egret.Shape();
        this.Object.addChild(this.Shape);
		GameObject.Display.setChildIndex(this.Object,6);
        this.Shape.x = PosX;
        this.Shape.y = PosY;
    }

    Update():void
    {
        if( this.NowFrame < 0 )
        {
            this.DestroyFlag=true;
            return;
        }

        this.Radius *= 1.03;
        this.NowFrame--;
    }

	OnDestroy()
    {
	 	this.Object.removeChild(this.Shape);
		 this.Shape=null;
    }

	Draw()
    {
        let Graphics = this.Shape.graphics;
        Graphics.clear();
        Graphics.lineStyle(3 + 10*(this.NowFrame/CircleExpandEffect.Max), this.Color);
        Graphics.drawCircle(0, 0, this.Radius);
    }
}