	enum GameStatus
	{
		Title,
		MainGame,
		Result
	}
 
 class GameManager extends GameObject
 {
	private NowStatus : GameStatus =GameStatus.MainGame;
	private Score :number = 0;
	private ScoreTex:TextComp=null;
	private EmitTime:number =500;
	private EmitCount:number =0;
	private TotalEmitCount:number =0;
	private Time:egret.Timer;
	private static Instance:GameManager=null;

	private Head:Rect;
	private Window:WindowComp;
	private TitleWindow:TitleWindowComp;
	private Button:AllScreenButtonComp;

	private DeadZone:Rect;

	public static GetInstance():GameManager
	{
		if(GameManager.Instance==null)
		{
			GameManager.Instance==new GameManager();
		}
		return GameManager.Instance;
	}

	constructor()
	{
		super();
		GameManager.Instance=this;
		this.Time=new egret.Timer(this.EmitTime,0);
        this.Time.addEventListener(egret.TimerEvent.TIMER,this.EmitTarget,this);
		this.GameInit();
		this.Object.touchEnabled=true;

		this.Head=new Rect(0,0,1280,60);
		this.Head.SetColor(0x121212);
		this.Head.SetAlpha(0.5);

		this.DeadZone=new Rect(0,0,1280,200);
		this.DeadZone.SetColor(0xd8574a);
		this.DeadZone.SetAlpha(1);
		this.DeadZone.SetIndexNum(10);
		this.Head.SetIndexNum(-1);

		GameObject.Display.once(egret.TouchEvent.TOUCH_BEGIN,this.GameStart,this);
	}

	private GameInit()
	{
		this.NowStatus =GameStatus.Title;
		this.Score=0;
		this.EmitTime=500;
		this.EmitCount=0;
		this.TotalEmitCount=0;
		this.Time.delay=this.EmitTime;

		let Targets:GameObject[] =GameObject.FindObjects("Target");
		Targets.forEach(Obj=>Obj.Destroy());

		this.TitleWindow=new TitleWindowComp(720/2,1280/2-100);

		if(this.Button!=null)
		{
			this.Button.Destroy();
			this.Button=null;
		}
		if(this.Window!=null)
		{
			this.Window.OnDestroy();
			this.Window=null;
		}
		if(this.ScoreTex==null)
		{
			this.ScoreTex=new TextComp(0,0,"SCORE:0",100,0.5,0.5,0xeae8db,true,false);
			this.ScoreTex.SetIndexNum(0);
		}
		this.ScoreTex.SetText("SCORE:"+this.Score.toFixed());
	}

	Update()
	{
		this.ScoreTex.SetText("SCORE:"+this.Score.toFixed());
	};

	OnDestroy(){};

	Draw(){};

	public ResetGame()
	{
		GameObject.Display.once(egret.TouchEvent.TOUCH_BEGIN,this.GameStart,this);
		this.GameInit();
	}

	private GameStart()
	{
		this.NowStatus=GameStatus.MainGame;
		this.TitleWindow.OnDestroy();
		this.TitleWindow=null;
        this.Time.start();
	}

	public AddScore(AddValue:number)
	{
		this.Score+=AddValue;
		if(this.Score<0)
		{
			this.Score=0;
			this.SetGameStatus(GameStatus.Result);
		}
	}

	 public GetGameStatus():GameStatus
	{
		return this.NowStatus;
	};

	public SetGameStatus(Status:GameStatus)
	{
		if(Status==GameStatus.Result)
		{
			let Targets:GameObject[] =GameObject.FindObjects("Target");
			Targets.forEach(Obj=>{
				new CircleExpandEffect(Obj.GetPosX(),Obj.GetPosY(),70,0x621122);
				Obj.Destroy();});
			this.Button=new AllScreenButtonComp(720/2,1280/2 + 400);
			this.Window=new WindowComp("SCORE",this.Score.toFixed(),720/2,1280/2);
		}
		this.NowStatus=Status;
	}

    private EmitTarget()
    {
		if(this.NowStatus!=GameStatus.MainGame)
		{
			return;
		}

		if(GameManager.GetRandomInt(1,2)%2==1)
		{
			if(this.TotalEmitCount>=50&&this.TotalEmitCount%6==0)
			{
				new TapTarget_2(MainGame.Width/2,MainGame.Height); 
			}
			else
			{
				new TapTarget(MainGame.Width/2,MainGame.Height); 
			}
		}
		else
		{
			if(this.TotalEmitCount>=30&&this.TotalEmitCount%8==0)
			{
				new DummyTarget_2(MainGame.Width/2,MainGame.Height); 
			}
			else
			{
				new DummyTarget(MainGame.Width/2,MainGame.Height); 
			}
		}
		
		this.EmitCount++;
		this.TotalEmitCount++;
		if(this.EmitCount>=20)
		{
			this.Time.delay = this.Time.delay>100 ? this.Time.delay-20:this.Time.delay;
			this.EmitCount=0;
		}
    }

	    static GetRandomInt(Min:number, Max:number):number 
	{
        return Math.floor( Min + Math.random() * (Max+0.999 - Min) );
    }
 }