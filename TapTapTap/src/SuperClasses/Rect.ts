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
		this.DrawRect();
	}
	
	SetColor(SetCol:number)
	{
		this.Color=SetCol;
		this.DrawRect();
	}

	SetAlpha(SetAlp:number)
	{
		this.Alpha=SetAlp;
		this.DrawRect();
	}

	RectSetting()
	{
		this.Shape = new egret.Shape();
		this.Width = 0;
		this.Height = 0;
		this.PosX=0;
		this.PosY=0;
		this.Object.addChild(this.Shape);
	}

	public SetIndexNum(Num:number)
	{
		GameObject.Display.setChildIndex(this.Object,Num);
	}
	Draw()
	{
	}
	
	DrawRect()
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
		this.DestroyFlag=true;
		 this.Object.removeChild(this.Shape);
		 this.Shape=null;
	};
}