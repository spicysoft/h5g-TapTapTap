
class TapTarget extends Circle
{
	public Height: number;
    public Width: number;
	private Speed:number;
	private TargetImage:ImageComp;
	public constructor(SetPosX:number,SetPosY:number) 
	{
		super();
		this.Tag="Target";
		this.TargetImage=new ImageComp("resource/Target_1_160.png",0,0,160,160,1,1);
		
		this.TargetInit();
		this.PosX=SetPosX;
		this.PosY=SetPosY;

		this.PosX=TapTarget.GetRandomInt(100.0,620.0);
		this.Speed=TapTarget.GetRandomInt(3.0,17.0);
		this.Alpha=0.1;
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
		GameManager.GetInstance().AddScore(1);
		new CircleExpandEffect(this.PosX,this.PosY,70,0xf5f5f5);
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
		this.TargetImage.SetPos(this.PosX,this.PosY);
	};

	OnDestroy()
	{
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		this.TargetImage.OnDestroy();
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
	private TargetImage:ImageComp;
	public constructor(SetPosX:number,SetPosY:number) 
	{
		super();
		this.Tag="Target";
		this.TargetImage=new ImageComp("resource/Target_2_160.png",0,0,160,160,1,1);

		this.TargetInit();
		this.PosX=SetPosX;
		this.PosY=SetPosY;

		this.PosX=TapTarget.GetRandomInt(100.0,620.0);
		this.Speed=TapTarget.GetRandomInt(3.0,17.0);
		this.Alpha=0.3;
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
		new CircleExpandEffect(this.PosX,this.PosY,70,0x101010);
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
			GameManager.GetInstance().AddScore(1);
			return;
		}
		this.TargetImage.SetPos(this.PosX,this.PosY);
	};

	OnDestroy()
	{
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		this.TargetImage.OnDestroy();
		super.OnDestroy();
	};

    static GetRandomInt(Min:number, Max:number):number 
	{
        return Math.floor( Min + Math.random() * (Max+0.999 - Min) );
    }
}

class ButtonComp extends Rect
{
	public Height: number;
    public Width: number;
	private Speed:number;
	private TargetImage:ImageComp;
	public constructor(SetPosX:number,SetPosY:number) 
	{
		super(SetPosX-520/2,SetPosY-120/2,520,120);
		this.Tag="Button";
		this.TargetImage=new ImageComp("resource/Button.png",SetPosX,SetPosY,520,120,1,1);

		this.Alpha=1;
		this.Color=0xff2222;
		this.TargetInit();
		this.Object.touchEnabled=true;
		this.Draw();
	}

	TargetInit()
	{
		this.Object.touchEnabled=true;
		this.Object.addEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
	}

	TapEvent()
	{
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.Result)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		  return;
		}
		egret.log("TAP!!!!");
		GameManager.GetInstance().ResetGame();
		this.DestroyFlag=true;
	}

	Update()
	{};

	OnDestroy()
	{
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.TapEvent,this);
		this.TargetImage.OnDestroy();
		super.OnDestroy();
	};
}