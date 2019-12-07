class Rect extends GameObject
{
	protected  PosX :number;
	protected  PosY :number;
	protected  Height: number;
    protected  Width: number;
	protected  Color:number;
	protected  Alpha:number;
	constructor(SetPosX:number,SetPosY:number,SetWidth:number,SetHeight:number)
	{
		super();
		this.RectSetting();
		this.PosX=SetPosX;
		this.PosY=SetPosY;
		this.Width=SetWidth;
		this.Height=SetHeight;
		this.Alpha=1;
		this.Color=0x00ff25;
	}
	
	SetColor(SetCol:number)
	{
		this.Color=SetCol;
	}

	SetAlpha(SetAlp:number)
	{
		this.Alpha=SetAlp;
	}

	RectSetting()
	{
		this.Shape = new egret.Shape();
		this.Width = 0;
		this.Height = 0;
		this.PosX=0;
		this.PosY=0;
		GameObject.Display.addChild(this.Shape);
		GameObject.Display.setChildIndex(this.Object,0);
	}

	Draw()
	{
		let Graphics = this.Shape.graphics;
		Graphics.clear();
		Graphics.beginFill(this.Color,this.Alpha);
        Graphics.drawRect(this.PosX, this.PosY,this.Width,this.Height);
		Graphics.endFill();
	}
	
	Update(){};

	OnDestroy()
	{
		 this.Object.removeChild(this.Shape);
		 this.Shape=null;
	};
}