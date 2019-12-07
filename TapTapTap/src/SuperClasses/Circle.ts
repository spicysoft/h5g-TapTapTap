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
		this.PosX=150;
		this.PosY=150;
		this.Alpha=1;
		this.Color=0x251025;
		this.Shape=new egret.Shape();
		this.Object.addChild(this.Shape);
		GameObject.Display.setChildIndex(this.Object,5);
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
		let Graphics = this.Shape.graphics;
		Graphics.clear();
		Graphics.beginFill(0xffff00,this.Alpha);
		Graphics.drawCircle(this.PosX,this.PosY,85);
		Graphics.endFill();
	}

	Update(){};

	OnDestroy()
	{
	 	this.Object.removeChild(this.Shape);
		 this.Shape=null;
	};
}