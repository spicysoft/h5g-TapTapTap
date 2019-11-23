	enum GameStatus
	{
		Title,
		MainGame,
		Result
	}
 
 class GameManager extends GameObject
 {
	private static NowStatus : GameStatus =GameStatus.MainGame;
	private static Score :number = 0;
	private ScoreTex:TextComp=null;

	constructor()
	{
		super();
		const Time:egret.Timer=new egret.Timer(500,0);
        Time.addEventListener(egret.TimerEvent.TIMER,this.EmitTarget,this);
        Time.start();
		this.GameInit();
	}

	private GameInit()
	{
		GameManager.NowStatus =GameStatus.MainGame;
		GameManager.Score=0;
		GameObject.DestroyAll();
		this.ScoreTex=new TextComp(0,0,"SCORE:0",100,0.5,0.5,0x00ffff,true);
	}

	Update()
	{
		this.ScoreTex.SetText("SCORE:"+GameManager.Score.toFixed());
	};

	OnDestroy(){};

	Draw(){};

	static AddScore(AddValue:number)
	{
		GameManager.Score+=AddValue;
	}

	static GetGameStatus():GameStatus
	{
		return GameManager.NowStatus;
	};

	static SetGameStatus(Status:GameStatus)
	{
		GameManager.NowStatus+=Status;
	}

    private EmitTarget()
    {
		if(GameManager.NowStatus==GameStatus.MainGame)
		{
			new TapTarget(MainGame.Width/2,MainGame.Height); 
		}
    }
 }