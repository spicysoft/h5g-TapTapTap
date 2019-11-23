
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
		if(GameManager.GetGameStatus()!=GameStatus.MainGame)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		  return;
		}
		egret.log("TAP!!!!");
		GameManager.AddScore(100);
		this.DestroyFlag=true;
	}

	Update()
	{
		if(GameManager.GetGameStatus()!=GameStatus.MainGame)
		{
			return;
		}
		if(this.PosY>200)
		{
			this.PosY-=10.0;
		}
		else
		{
			//this.DestroyFlag=true;
			GameManager.SetGameStatus(GameStatus.Result);
			return;
		}
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

class DummyTarget extends Circle
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
		if(GameManager.GetGameStatus()!=GameStatus.MainGame)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		  return;
		}
		egret.log("TAP!!!!");
		GameManager.SetGameStatus(GameStatus.Result);
		this.DestroyFlag=true;
	}

	Update()
	{
		if(GameManager.GetGameStatus()!=GameStatus.MainGame)
		{
			return;
		}
		if(this.PosY>200)
		{
			this.PosY-=10.0;
		}
		else
		{
			//this.DestroyFlag=true;
			GameManager.SetGameStatus(GameStatus.Result);
			return;
		}
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