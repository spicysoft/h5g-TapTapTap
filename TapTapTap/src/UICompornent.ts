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
    protected TextF:egret.TextField =null;

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
        this.Display.setChildIndex(this.TextF,-1);
    }

    public SetText(SetText:string)
    {
        this.TextF.text=SetText;
    }

    Update(){};

	OnDestroy()
    {
        this.Display.removeChild( this.TextF);
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

class ImageComp extends UICompornent
{
 
	private Image:eui.Image;
    private Height:number;
    private Width:number;

    constructor(ImagePath:string,PosX:number, PosY:number,Width:number,Height:number ,ScaleX:number, ScaleY:number)
    {
        super();
		let LoadImage :eui.Image=new eui.Image();
		LoadImage.source=ImagePath;
		this.Image=LoadImage;
        this.Image.scaleX=ScaleX;
        this.Image.scaleY=ScaleY;
        this.Height=Height;
        this.Width=Width;
      //  this.Image.horizontalCenter=-(this.Width*ScaleX)/2;
      //  this.Image.verticalCenter=-(this.Height*ScaleY)/2
        this.Image.x=PosX-(this.Width*this.Image.scaleX/2);;
        this.Image.y=PosY-(this.Height*this.Image.scaleY/2);;
		this.Display.addChild(this.Image);
        this.Display.setChildIndex(this.Image,4);
    }

    public SetPos(PosX:number, PosY:number)
    {
        this.Image.x=PosX-(this.Width*this.Image.scaleX/2);
        this.Image.y=PosY-(this.Height*this.Image.scaleY/2);
    }

    Update(){};

	OnDestroy()
    {
        this.Display.removeChild(this.Image);
        this.Image = null;
    };

	Draw(){};
}

class WindowComp extends UICompornent
{
    WindowImage:ImageComp;
    TitleText:TextComp;
    InfoText:TextComp;

    constructor(Title:string,Info:string,PosX:number, PosY:number)
    {
        super();
        this.WindowImage=new ImageComp("resource/Window.png",PosX,PosY,640,520,1,1);
        this.TitleText=new TextComp(PosX-105,PosY-215,Title,100,0.5,0.5,0xffffff,true);
        this.InfoText=new TextComp(PosX-210,PosY,Info,100,1,1,0xffffff,true);
    }

    public SetPos(PosX:number, PosY:number)
    {

    }

    Update(){};

	OnDestroy()
    {
        this.WindowImage.OnDestroy();
        this.TitleText.OnDestroy();
        this.InfoText.OnDestroy();
    };

	Draw(){};
}