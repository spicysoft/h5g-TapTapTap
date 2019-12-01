
class TapTarget extends Circle
{
	public Height: number;
    public Width: number;
	private Speed:number;
	private Image:eui.Image;

	public constructor(SetPosX:number,SetPosY:number) 
	{
		super();
		this.Tag="Target";
		let LoadImage :eui.Image=new eui.Image();
		LoadImage.source="resource/Target1.png";
		this.Image=LoadImage;
		this.Object.addChild(this.Image);
		
		this.TargetInit();
		this.PosX=SetPosX;
		this.PosY=SetPosY;

		this.PosX=TapTarget.GetRandomInt(100,620);
		this.Speed=TapTarget.GetRandomInt(5.0,15.0);
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
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.MainGame)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		  return;
		}
		egret.log("TAP!!!!");
		GameManager.GetInstance().AddScore(100);
		this.DestroyFlag=true;
	}

	Update()
	{
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.MainGame)
		{
			return;
		}
		if(this.PosY>200)
		{
			this.PosY-=this.Speed;
		}
		else
		{
			//this.DestroyFlag=true;
			GameManager.GetInstance().SetGameStatus(GameStatus.Result);
			return;
		}
	};

	OnDestroy()
	{
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		if( this.Image!=null )
		{
			this.Object.removeChild(this.Image);
			this.Image = null;
		}
		super.OnDestroy();
	};

    static GetRandomInt(Min:number, Max:number):number 
	{
        return Math.floor( Min + Math.random() * (Max+0.999 - Min) );
    }
}

class DummyTarget extends Circle
{
	public Height: number;
    public Width: number;
	private Speed:number;
	private Image:eui.Image;
	public constructor(SetPosX:number,SetPosY:number) 
	{
		super();
		this.Tag="Target";

		let LoadImage :eui.Image=new eui.Image();
		LoadImage.source="resource/Target2.png";
		this.Image=LoadImage;
		this.Object.addChild(this.Image);

		this.TargetInit();
		this.PosX=SetPosX;
		this.PosY=SetPosY;

		this.PosX=TapTarget.GetRandomInt(100,620);
		this.Speed=TapTarget.GetRandomInt(5.0,15.0);
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
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.MainGame)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		  return;
		}
		egret.log("TAP!!!!");
		GameManager.GetInstance().SetGameStatus(GameStatus.Result);
		this.DestroyFlag=true;
	}

	Update()
	{
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.MainGame)
		{
			return;
		}
		if(this.PosY>200)
		{
			this.PosY-=this.Speed;
		}
		else
		{
			//ダミーマトの場合は加算する
			this.DestroyFlag=true;
			GameManager.GetInstance().AddScore(100);
			return;
		}
	};

	OnDestroy()
	{
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		if( this.Image!=null )
		{
			this.Object.removeChild(this.Image);
			this.Image = null;
		}

		super.OnDestroy();
	};

    static GetRandomInt(Min:number, Max:number):number 
	{
        return Math.floor( Min + Math.random() * (Max+0.999 - Min) );
    }
}