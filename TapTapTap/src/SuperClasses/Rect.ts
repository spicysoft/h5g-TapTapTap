class Rect extends GameObject
{
	protected  PosX :number;
	protected  PosY :number;
	protected  Height: number;
    protected  Width: number;

	constructor(SetPosX:number,SetPosY:number,SetWidth:number,SetHeight:number)
	{
		super();
		this.RectSetting();
		this.PosX=SetPosX;
		this.PosY=SetPosY;
		this.Width=SetWidth;
		this.Height=SetHeight;
	}

	RectSetting()
	{
		this.Shape = new egret.Shape();
		this.Width = 0;
		this.Height = 0;
		this.PosX=0;
		this.PosY=0;
		GameObject.Display.addChild(this.Shape);
	}

	Draw()
	{
		let Graphics = this.Shape.graphics;
		Graphics.clear();
		Graphics.beginFill(0x0000ff);
        Graphics.drawRect(this.PosX, this.PosY,this.Width,this.Height);
		Graphics.endFill();
	}
	
	Update(){};

	OnDestroy(){};
}