
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

		
		this.TargetInit();
		this.PosX=SetPosX;
		this.PosY=SetPosY;

		this.PosX=Utility.GetRandomInt(100.0,620.0);
		this.Speed=Utility.GetRandom(0.3,1.5);
		this.Alpha=1;
		this.SetIndexNum(-1);

		this.Object.x=this.PosX;
		this.Object.y=this.PosY;
		this.DrawCircle();
	}

	TargetInit()
	{
		this.Height = egret.MainContext.instance.stage.stageHeight;
		this.Width  = egret.MainContext.instance.stage.stageWidth;
		this.Object.touchEnabled=true;
		this.Object.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
	}

	TapEvent()
	{
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.MainGame)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
		  return;
		}
		egret.log("TAP!!!!");
		GameManager.GetInstance().AddScore(1);
		new CircleExpandEffect(this.PosX,this.PosY,70,0x621122);
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
		this.PosY-=this.Speed*GameObject.FixedTime;
		this.Object.x=this.PosX;
		this.Object.y=this.PosY;
		}
		else
		{
			GameManager.GetInstance().SetGameStatus(GameStatus.Result);
			return;
		}
	};

	OnDestroy()
	{
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
		super.OnDestroy();
	};

	DrawCircle()
	{
		let Graphics = this.Shape.graphics;
		Graphics.clear();
		Graphics.beginFill(this.Color,this.Alpha);
		Graphics.drawCircle(0,0,85);
		Graphics.endFill();
		Graphics.beginFill(0x000000,0);
		Graphics.drawCircle(0,0,110);
		Graphics.endFill();
	}
}

class TapTarget_2 extends Circle
{
	public Height: number;
    public Width: number;
	private Speed:number;
	private BaseX:number;
	private TargetImage:ImageComp;
	public constructor(SetPosX:number,SetPosY:number) 
	{
		super();
		this.Tag="Target";

		
		this.TargetInit();
		this.PosX=SetPosX;
		this.PosY=SetPosY;
		this.BaseX=SetPosX;
		this.PosX=Utility.GetRandomInt(100.0,620.0);
		this.Speed=Utility.GetRandom(0.3,1.5);
		this.Alpha=1;
		this.SetIndexNum(-1);
		this.Object.x=this.PosX;
		this.Object.y=this.PosY;
		this.DrawCircle();
	}

	TargetInit()
	{
		this.Height = egret.MainContext.instance.stage.stageHeight;
		this.Width  = egret.MainContext.instance.stage.stageWidth;
		this.Object.touchEnabled=true;
		this.Object.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
	}

	TapEvent()
	{
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.MainGame)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
		  return;
		}
		egret.log("TAP!!!!");
		GameManager.GetInstance().AddScore(1);
		new CircleExpandEffect(this.PosX,this.PosY,70,0x621122);
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
			this.PosY-=this.Speed*GameObject.FixedTime;
			egret.Tween.get(this,{loop:true}).to({PosX:this.BaseX-100}, 500).to({PosX:this.BaseX+100}, 500).to({PosX:this.BaseX+100}, 500).to({PosX:this.BaseX-100}, 500);
		this.Object.x=this.PosX;
		this.Object.y=this.PosY;
		}
		else
		{
			GameManager.GetInstance().SetGameStatus(GameStatus.Result);
			return;
		}
	};

	OnDestroy()
	{
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
		super.OnDestroy();
	};

	DrawCircle()
	{
		let Graphics = this.Shape.graphics;
		Graphics.clear();
		Graphics.beginFill(this.Color,this.Alpha);
		Graphics.drawCircle(0,0,85);
		Graphics.endFill();
		Graphics.beginFill(0x000000,0);
		Graphics.drawCircle(0,0,110);
		Graphics.endFill();
	}
}

class DummyTarget extends Circle
{
	public Height: number;
    public Width: number;
	private Speed:number;
	public constructor(SetPosX:number,SetPosY:number) 
	{
		super();
		this.Tag="Target";
		this.TargetInit();
		this.PosX=SetPosX;
		this.PosY=SetPosY;
		this.SetIndexNum(-1);
		this.PosX=Utility.GetRandomInt(100.0,620.0);
		this.Speed=Utility.GetRandom(0.3,1.5);
		this.Alpha=1;
		this.Color=0xd8574a;
		this.Object.x=this.PosX;
		this.Object.y=this.PosY;
		this.DrawCircle();
		this.Object.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
	}

	TargetInit()
	{
		this.Height = egret.MainContext.instance.stage.stageHeight;
		this.Width  = egret.MainContext.instance.stage.stageWidth;
		this.Object.touchEnabled=true;
	}

	TapEvent()
	{
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.MainGame)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
		  return;
		}
		egret.log("TAP!!!!");
		GameManager.GetInstance().AddScore(-2);
		new CircleExpandEffect(this.PosX,this.PosY,70,0xd8574a);
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
		this.PosY-=this.Speed*GameObject.FixedTime;
		this.Object.x=this.PosX;
		this.Object.y=this.PosY;
		}
		else
		{
			this.DestroyFlag=true;
			new CircleExpandEffect(this.PosX,this.PosY,70,0xd8574a);
			return;
		}
	};

	OnDestroy()
	{
		new CircleExpandEffect(this.PosX,this.PosY,70,0x621122);
		super.OnDestroy();
	};

}

class DummyTarget_2 extends Circle
{
	public Height: number;
    public Width: number;
	private Speed:number;
	private BaseX:number;
	private NowFrame:number;
	public constructor(SetPosX:number,SetPosY:number) 
	{
		super();
		this.Tag="Target";
		this.NowFrame=0;
		this.TargetInit();
		this.PosX=SetPosX;
		this.BaseX=SetPosX;
		this.PosY=SetPosY;
		this.Color=0xd8574a;
		this.SetIndexNum(-1);
		this.PosX=Utility.GetRandomInt(100.0,620.0);
		this.Speed=Utility.GetRandom(0.3,1.5);
		this.Alpha=1;

		this.Object.x=this.PosX;
		this.Object.y=this.PosY;
		this.DrawCircle();
		this.Object.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
	}

	TargetInit()
	{
		this.Height = egret.MainContext.instance.stage.stageHeight;
		this.Width  = egret.MainContext.instance.stage.stageWidth;
		this.Object.touchEnabled=true;
	}

	TapEvent()
	{
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.MainGame)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
		  return;
		}
		egret.log("TAP!!!!");
		GameManager.GetInstance().AddScore(-2);
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
			this.PosY-=this.Speed*GameObject.FixedTime;
		egret.Tween.get(this,{loop:true}).to({PosX:this.BaseX-100}, 500).to({PosX:this.BaseX+100}, 500).to({PosX:this.BaseX+100}, 500).to({PosX:this.BaseX-100}, 500);
		this.Object.x=this.PosX;
		this.Object.y=this.PosY;
		}
		else
		{
			this.DestroyFlag=true;
			new CircleExpandEffect(this.PosX,this.PosY,70,0xd8574a);
			return;
		}
	};

	OnDestroy()
	{
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
		super.OnDestroy();
	};

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
		this.SetIndexNum(-1);
		this.Alpha=1;
		this.Color=0xff2222;
		this.TargetInit();
		this.Object.touchEnabled=true;

		this.DrawRect();
	}

	TargetInit()
	{
		this.Object.touchEnabled=true;
		this.Object.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
	}

	TapEvent()
	{
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.Result)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
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
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
		this.TargetImage.OnDestroy();
		super.OnDestroy();
	};
}

class AllScreenButtonComp extends Rect
{
	public Height: number;
    public Width: number;
	private Speed:number;
	public constructor(SetPosX:number,SetPosY:number) 
	{
		super(0,0,720,1280);
		this.Tag="Button";
		this.SetIndexNum(-1);
		this.Alpha=0;
		this.Color=0xff2222;
		this.TargetInit();
		this.Object.touchEnabled=true;
		this.DrawRect();
	}

	TargetInit()
	{
		this.Object.touchEnabled=true;
		this.Object.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
	}

	TapEvent()
	{
		if(GameManager.GetInstance().GetGameStatus()!=GameStatus.Result)
		{
		  this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
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
		this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.TapEvent,this);
		super.OnDestroy();
	};
}