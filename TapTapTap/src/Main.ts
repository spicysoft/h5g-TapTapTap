class Main extends eui.UILayer 
{
    public constructor() 
    {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
    }
 
    private addToStage() 
    {
        GameObject.Init(this.stage);
        MainGame.Init(this.stage);
        egret.startTick(this.tickLoop, this);
    }
 
    tickLoop(timeStamp:number):boolean
    {
        GameObject.UpdateAll();
        return false;
    }
}
 
class MainGame{
 
    static MainStage: egret.Stage;
    static Height: number;
    static Width: number;
 
    static Init(Stage:egret.Stage)
     {
        MainGame.Height = egret.MainContext.instance.stage.stageHeight;
        MainGame.Width  = egret.MainContext.instance.stage.stageWidth;
        MainGame.MainStage = Stage;
        new GameManager();
        new BackGround(0,0,MainGame.Width,MainGame.Height);
    }
}

 class BackGround extends Rect
 {
     constructor(SetPosX:number,SetPosY:number,SetWidth:number,SetHeight:number)
     {
        super(SetPosX,SetPosY,SetWidth,SetHeight);
     }
 }

 class GameManager extends GameObject
 {
	constructor()
	{
		super();
        const Time:egret.Timer=new egret.Timer(500,0);
        Time.addEventListener(egret.TimerEvent.TIMER,this.EmitTarget,this);
        Time.start();
	}

	Update(){};

	OnDestroy(){};

    private EmitTarget()
    {
        new TapTarget(MainGame.Width/2,MainGame.Height); 
    }
 }