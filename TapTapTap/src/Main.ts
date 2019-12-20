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
        GameObject.UpdateAll(timeStamp);
        GameObject.DrawAll();
        return true;
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
        new BackGround(0,0,MainGame.Width,MainGame.Height);
        new UILayer();
        new GameManager();
        MainGame.MainStage.setChildIndex(UILayer.Display,-1);
    }
}

class UILayer
{
    static Display:eui.UILayer=null;
    constructor()
    {
        this.Init();
    }

    private Init()
    {
        UILayer.Display=new eui.UILayer();
        MainGame.MainStage.addChild(UILayer.Display);
    }   
}

 class BackGround extends Rect
 {
     constructor(SetPosX:number,SetPosY:number,SetWidth:number,SetHeight:number)
     {
        super(SetPosX,SetPosY,SetWidth,SetHeight);
        this.SetColor(0xecce9e);
     }
 }