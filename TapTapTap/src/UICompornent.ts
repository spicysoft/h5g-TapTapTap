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

    public SetIndexNum(Num:number)
    {
        UILayer.Display.setChildIndex(this.Display,Num);

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

    constructor(PosX:number, PosY:number, SetText:string, Size:number, ScaleX:number, ScaleY:number,Color:number, Bold:boolean,Center:boolean)
    {
        super();
        this.TextF=new egret.TextField();
        this.TextF.text = SetText;
        this.TextF.bold = Bold;
        this.TextF.size = Size;
        this.TextF.scaleX = ScaleX;
        this.TextF.scaleY = ScaleY;
        this.TextF.textColor = Color;
        this.TextF.x =Center? (PosX)-this.TextF.width*0.5:PosX;
        this.TextF.y =Center? (PosY)-this.TextF.height*0.5:PosY;
        this.Display.addChild(this.TextF);
        UILayer.Display.setChildIndex(this.Display,-1);
    }


    public GetPosX():number
    {
        return this.TextF.x;
    }

    public GetPosY():number
    {
        return this.TextF.y;
    }

    public SetPos(XPos:number,YPos:number)
    {
        this.TextF.x = XPos;
        this.TextF.y = YPos;
    }

    public AddPos(XPos:number,YPos:number)
    {
        this.TextF.x += XPos;
        this.TextF.y += YPos;
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

class TitleWindowComp extends UICompornent
{
    TitleText:TextComp;
    TitleRect:Rect;
    InfoText:TextComp[] =[];
    InfoRect:Rect;

    constructor(PosX:number, PosY:number)
    {
        super();
        this.TitleRect=new Rect(0,PosY-100,1280,100);
        this.TitleRect.SetColor(0x621122);
		this.TitleRect.SetAlpha(1);

        this.TitleText=new TextComp(PosX,PosY-50,"タピオカタップ",80,1,1,0xffffff,true,true);

        this.InfoRect=new Rect(0,PosY,1280,250);
        this.InfoRect.SetColor(0xd8574a);
		this.InfoRect.SetAlpha(1);

        this.InfoText[0]=new TextComp(PosX,PosY+40,"黒タピオカをタップ！",50,1,1,0xffffff,true,true);
        this.InfoText[1]=new TextComp(PosX,PosY+90,"画面上の赤いエリアに",50,1,1,0xffffff,true,true);
        this.InfoText[2]=new TextComp(PosX,PosY+140,"黒タピオカが入ると終了！",50,1,1,0xffffff,true,true);
        this.InfoText[3]=new TextComp(PosX,PosY+190,"赤のタピオカは潰さないで！",50,1,1,0xffffff,true,true);

        this.InfoRect.SetIndexNum(5);
        this.TitleRect.SetIndexNum(5);
        this.TitleText.SetIndexNum(-1);
        for (var i = 0; i < 4; i++) 
        { 
              this.InfoText[i].SetIndexNum(-1);
        }
    }

    public SetPos(PosX:number, PosY:number)
    {

    }

    Update(){};

	OnDestroy()
    {
        this.TitleText.OnDestroy();
        this.TitleRect.Destroy();
        for (var i = 0; i < 4; i++) 
        { 
            this.InfoText[i].OnDestroy();
        }
        this.InfoRect.Destroy();
    };

	Draw(){};
}

class WindowComp extends UICompornent
{
    TitleText:TextComp;
    TitleRect:Rect;
    InfoText:TextComp;
    InfoRect:Rect;

    constructor(Title:string,Info:string,PosX:number, PosY:number)
    {
        super();
        this.TitleRect=new Rect(0,PosY-100,1280,100);
        this.TitleRect.SetColor(0x621122);
		this.TitleRect.SetAlpha(1);

        this.TitleText=new TextComp(PosX,PosY-50,Title,80,1,1,0xffffff,true,true);

        this.InfoRect=new Rect(0,PosY,1280,150);
        this.InfoRect.SetColor(0xd8574a);
		this.InfoRect.SetAlpha(1);

        this.InfoText=new TextComp(PosX,PosY+70,Info,100,1,1,0xffffff,true,true);

        this.InfoRect.SetIndexNum(5);
        this.TitleRect.SetIndexNum(5);
        this.InfoText.SetIndexNum(-1);
        this.TitleText.SetIndexNum(-1);
    }

    public SetPos(PosX:number, PosY:number)
    {

    }

    Update(){};

	OnDestroy()
    {
        this.TitleText.OnDestroy();
        this.TitleRect.Destroy();
        this.InfoText.OnDestroy();
        this.InfoRect.Destroy();
    };

	Draw(){};
}