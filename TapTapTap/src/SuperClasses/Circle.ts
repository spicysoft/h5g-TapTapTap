class Circle extends GameObject
{
	protected  PosX :number;
	protected  PosY :number;
	protected  Color:number;
	protected  Alpha:number;
	constructor()
	{
		super();
		this.CircleSetting();
	}
	
	CircleSetting()
	{
		this.PosX=0;
		this.PosY=0;
		this.Alpha=1;
		this.Color=0x251025;
		this.Shape=new egret.Shape();
		this.Object.addChild(this.Shape);
	}
	public SetIndexNum(Num:number)
	{
		GameObject.Display.setChildIndex(this.Object,Num);
	}
	SetColor(SetCol:number)
	{
		this.Color=SetCol;
	}

	SetAlpha(SetAlp:number)
	{
		this.Alpha=SetAlp;
	}

	Draw()
	{
	}

	DrawCircle()
	{
		let Graphics = this.Shape.graphics;
		Graphics.clear();
		Graphics.beginFill(this.Color,this.Alpha);
		//Graphics.drawCircle(this.PosX,this.PosY,85);
		Graphics.drawCircle(0,0,85);
		Graphics.endFill();
	}
	Update()
	{
		this.Object.x=this.PosX;
		this.Object.y=this.PosY;
	};

	OnDestroy()
	{
	 	this.Object.removeChild(this.Shape);
		 this.Shape=null;
	};
}