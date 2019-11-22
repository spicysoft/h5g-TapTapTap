abstract class GameObject
{
    static Objects: GameObject[] = [];
 	public static Display: egret.DisplayObjectContainer;

	protected DestroyFlag :boolean=false;
	protected Shape :egret.Shape=null;
	protected Object: egret.DisplayObjectContainer = null;
    constructor()
	{
		this.Object=new egret.DisplayObjectContainer();
		GameObject.Objects.push(this);
		GameObject.Display.addChild(this.Object);
    }
 
   static Init(TargetDisplayOC: egret.DisplayObjectContainer)
	{
		GameObject.Objects=[];
		GameObject.Display=TargetDisplayOC;
    }
 
    static UpdateAll()
    {
       GameObject.Objects.forEach(Obj=>Obj.Update());
	   GameObject.Objects=GameObject.Objects.filter(Obj=>{
		   								if(Obj.DestroyFlag==true)
										{
											Obj.delete();
										}
										return (!Obj.DestroyFlag);
									});
    }

	abstract Update():void;

	private delete()
	{
	this.OnDestroy();
	}

	abstract OnDestroy():void;
}

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

	Update()
	{
	  this.Draw();
	};

	OnDestroy(){};
}

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
	Update()
	{
		this.Draw();
	};

	OnDestroy(){};
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

		this.PosX=TapTarget.GetRandomInt(100,620);
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
		egret.log("TAP!!!!");
		this.DestroyFlag=true;
	}

	Update()
	{
		if(this.PosY>200)
		{
			this.PosY-=10.0;
		}
		else
		{
			this.DestroyFlag=true;
			return;
		}
		this.Draw();
	};

	OnDestroy()
	{
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		this.Object.removeChild(this.Shape);
		this.Shape = null;
	};

    static GetRandomInt(Min:number, Max:number):number 
	{
        return Math.floor( Min + Math.random() * (Max+0.999 - Min) );
    }
}
