class GameObject extends egret.DisplayObjectContainer
{
 
    Object: egret.DisplayObjectContainer = null;
    static Objects: GameObject[] = [];
 
    constructor(){
        super();
        this.Init();
    }
 
    Init()
	{
        this.Object = new egret.DisplayObjectContainer();
		BackGround.Display.addChild(this.Object);
        GameObject.Objects.push(this);
    }
 
}

class Circle extends GameObject
{
	protected  PosX :number;
	protected  PosY :number;
	protected Shape :egret.Shape;
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
	}

	Draw()
	{
		let Graphics = this.Shape.graphics;
		Graphics.beginFill(0xffff00);
		Graphics.drawCircle(this.PosX,this.PosY,100);
		Graphics.endFill();

		this.Object.addChild(this.Shape);
	}
}

class Rect extends GameObject
{
	protected  PosX :number;
	protected  PosY :number;
	protected  Height: number;
    protected  Width: number;
	protected  Shape :egret.Shape;

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
	}

	Draw()
	{
		let Graphics = this.Shape.graphics;
		Graphics.beginFill(0x0000ff);
        Graphics.drawRect(this.PosX, this.PosY,this.width,this.height);
		Graphics.endFill();
        this.Object.addChild(this.Shape);
	}

}

class TapTarget extends Circle
{
	public Height: number;
    public Width: number;


	public constructor(SetPosX:number,SetPosY:number) 
	{
		super();
		this.TargetInit();
		this.PosX=SetPosX;
		this.PosY=SetPosY;
		this.Draw();
	}

	TargetInit()
	{
		this.Height = egret.MainContext.instance.stage.stageHeight;
		this.Width  = egret.MainContext.instance.stage.stageWidth;
		this.Object.touchEnabled=true;
		this.Object.addEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
	}

	TapEvent()
	{
		console.log("TAP!!!!");
	}
}
