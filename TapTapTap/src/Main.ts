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
        GameObject.DrawAll();
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
        new BackGround(0,0,MainGame.Width,MainGame.Height);
        new UILayer();
        new GameManager();
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

abstract class UICompornent extends egret.DisplayObjectContainer
{
    static Compornents:UICompornent[]=[];
    protected Display : egret.DisplayObjectContainer=null;
	protected DestroyFlag :boolean=false;
    constructor()
    {
        super();
        this.Init();
    }
    Init()
    {
        this.Display= new egret.DisplayObjectContainer();
        UILayer.Display.addChild(this.Display);
        UICompornent.Compornents.push(this);
    }

    static UpdateAll()
    {
       UICompornent.Compornents.forEach(Obj=>Obj.Update());
	   UICompornent.Compornents=UICompornent.Compornents.filter(Obj=>{
		   								if(Obj.DestroyFlag==true)
										{
											Obj.Delete();
										}
										return (!Obj.DestroyFlag);
									});
    }

	static DrawAll()
	{
		UICompornent.Compornents.forEach(Obj=>Obj.Draw());
	}

	static DestroyAll()
	{
		UICompornent.Compornents.forEach(Obj=>Obj.Delete());
	}

	abstract Update():void;

    public SetDeleteFlag()
    {
        this.DestroyFlag=true;
    }
	private Delete()
	{
	this.OnDestroy();
	}

	abstract OnDestroy():void;

	abstract Draw():void;
}

class TextComp extends UICompornent
{
 
    private OutputText : string ="";
    private TextF:egret.TextField =null;

    constructor(PosX:number, PosY:number, SetText:string, Size:number, ScaleX:number, ScaleY:number,Color:number, Bold:boolean)
    {
        super();
        this.TextF=new egret.TextField();
        this.TextF.x = PosX;
        this.TextF.y = PosY;
        this.TextF.text = SetText;
        this.TextF.bold = Bold;
        this.TextF.size = Size;
        this.TextF.scaleX = ScaleX;
        this.TextF.scaleY = ScaleY;
        this.TextF.textColor = Color;
        this.Display.addChild(this.TextF);
    }

    public SetText(SetText:string)
    {
        this.TextF.text=SetText;
    }

    Update(){};

	OnDestroy()
    {
        UILayer.Display.removeChild( this.TextF);
        this.TextF= null;
    };

	Draw(){};

   private CreateText(PosX:number, PosY:number, SetText:string, Size:number, ScaleX:number, ScaleY:number,Color:number, Bold:boolean): egret.TextField 
   {
        let ReturnTF :egret.TextField = new egret.TextField();
        ReturnTF.x = PosX;
        ReturnTF.y = PosY;
        ReturnTF.text = SetText;
        ReturnTF.bold = Bold;
        ReturnTF.size = Size;
        ReturnTF.scaleX = ScaleX;
        ReturnTF.scaleY = ScaleY;
        ReturnTF.textColor = Color;
        return ReturnTF;
    }
}

 class BackGround extends Rect
 {
     constructor(SetPosX:number,SetPosY:number,SetWidth:number,SetHeight:number)
     {
        super(SetPosX,SetPosY,SetWidth,SetHeight);
     }
 }