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
	private Time:egret.Timer;
	private static Instance:GameManager=null;

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
		GameObject.Display.once(egret.TouchEvent.TOUCH_BEGIN,this.GameStart,this);
	}

	private GameInit()
	{
		this.NowStatus =GameStatus.Title;
		this.Score=0;
		this.EmitTime=500;
		this.EmitCount=0;
		this.Time.delay=this.EmitTime;

		let Targets:GameObject[] =GameObject.FindObjects("Target");
		Targets.forEach(Obj=>Obj.Destroy());

		this.ScoreTex=new TextComp(0,0,"SCORE:0",100,0.5,0.5,0x00ffff,true);
	}

	Update()
	{
		this.ScoreTex.SetText("SCORE:"+this.Score.toFixed());
	};

	OnDestroy(){};

	Draw(){};

	private ResetGame()
	{
		GameObject.Display.once(egret.TouchEvent.TOUCH_BEGIN,this.GameStart,this);
		this.GameInit();
	}

	private GameStart()
	{
		this.NowStatus=GameStatus.MainGame;
        this.Time.start();
	}

	public AddScore(AddValue:number)
	{
		this.Score+=AddValue;
	}

	 public GetGameStatus():GameStatus
	{
		return this.NowStatus;
	};

	public SetGameStatus(Status:GameStatus)
	{
		if(Status==GameStatus.Result)
		{
		GameObject.Display.once(egret.TouchEvent.TOUCH_BEGIN,this.ResetGame,this);
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
			new TapTarget(MainGame.Width/2,MainGame.Height); 
		}
		else
		{
			new DummyTarget(MainGame.Width/2,MainGame.Height); 
		}
		
		this.EmitCount++;

		if(this.EmitCount>=10)
		{
			this.Time.delay = this.Time.delay>100 ? this.Time.delay-20:this.Time.delay;
		}
    }

	    static GetRandomInt(Min:number, Max:number):number 
	{
        return Math.floor( Min + Math.random() * (Max+0.999 - Min) );
    }
 }