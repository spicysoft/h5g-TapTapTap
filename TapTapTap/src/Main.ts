class Main extends eui.UILayer 
{
    public constructor() 
    {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
    }
 
    private addToStage() 
    {
        egret.startTick(this.tickLoop, this);
        MainGame.Init(this.stage);
    }
 
    tickLoop(timeStamp:number):boolean
    {
        return false;
    }
}
 
class MainGame{
 
    static Target : MainGame;
    static MainStage: egret.Stage;
    static Height: number;
    static Width: number;
 
    static Init(Stage:egret.Stage)
     {
        MainGame.Target = this;
        MainGame.Height = egret.MainContext.instance.stage.stageHeight;
        MainGame.Width  = egret.MainContext.instance.stage.stageWidth;
        MainGame.MainStage = Stage;

        new BackGround();
        new TapTarget(200,200);    
    }
 
}

 class BackGround extends egret.DisplayObjectContainer
 {
    private  Height: number;
    private  Width: number;

    static Display : egret.DisplayObjectContainer=null;

     constructor()
     {
        super();
        this.Init();
        let BG :Rect = new Rect(this.Width/2,this.Height/2,this.Width,this.Height);
        BG.Draw();
     }

     Init()
     {
         BackGround.Display=new egret.DisplayObjectContainer();
         MainGame.MainStage.addChild(BackGround.Display);
        this.Height = egret.MainContext.instance.stage.stageHeight;
        this.Width  = egret.MainContext.instance.stage.stageWidth;
     }
 }