class Circle extends GameObject
{
	protected  PosX :number;
	protected  PosY :number;

	constructor()
	{
		super();
		this.CircleSetting();
	}
	
	CircleSetting()
	{
		this.PosX=150;
		this.PosY=150;
		this.Shape=new egret.Shape();
		this.Object.addChild(this.Shape);
	}

	Draw()
	{
		let Graphics = this.Shape.graphics;
		Graphics.clear();
		Graphics.beginFill(0xffff00);
		Graphics.drawCircle(this.PosX,this.PosY,100);
		Graphics.endFill();
	}

	Update(){};

	OnDestroy()
	{
	 	this.Object.removeChild(this.Shape);
		 this.Shape=null;
	};
}