abstract class GameObject
{
    static Objects: GameObject[] = [];
 	public static Display: egret.DisplayObjectContainer;

	protected DestroyFlag :boolean=false;
	protected Shape :egret.Shape=null;
	protected Object: egret.DisplayObjectContainer = null;
	protected Tag : string="Default";

	protected static Time:number;
	protected static FixedTime:number;

    constructor()
	{
		this.Object=new egret.DisplayObjectContainer();
		GameObject.Objects.push(this);
		GameObject.Display.addChild(this.Object);
    }
 
   static Init(TargetDisplayOC: egret.DisplayObjectContainer)
	{
		GameObject.Objects=[];
		GameObject.Display=TargetDisplayOC;
		GameObject.Time=0;
		GameObject.FixedTime=0;
    }
 
    static UpdateAll(timeStamp:number)
    {
		GameObject.FixedTime=timeStamp-GameObject.Time;
		GameObject.Time=timeStamp;
		console.log("Fixed",GameObject.FixedTime.toFixed());
       GameObject.Objects.forEach(Obj=>Obj.Update());
	   GameObject.Objects=GameObject.Objects.filter(Obj=>{
		   								if(Obj.DestroyFlag==true)
										{
											Obj.Delete();
										}
										return (!Obj.DestroyFlag);
									});
    }


//現在インスタンスされているオブジェクト群から指定タグと合致するものを検索しリストを返す
	static FindObjects(TargetTag:string): GameObject[]
	{
		return GameObject.Objects.filter(Obj=>{return Obj.Tag==TargetTag;});
	}

	static DrawAll()
	{
		GameObject.Objects.forEach(Obj=>Obj.Draw());
	}

	static DestroyAll()
	{
		GameObject.Objects.forEach(Obj=>Obj.Destroy());
	}

	abstract Update():void;

	public Destroy()
	{
		this.DestroyFlag=true;
	}

	private Delete()
	{
		this.OnDestroy();
		if( this.Shape!=null )
		{
			GameObject.Display.removeChild(this.Shape);
			this.Shape = null;
		}
	}

	public GetPosX():number
	{
		return this.Object.x;
	}

	public GetPosY():number
	{
		return this.Object.y;
	}

	abstract OnDestroy():void;

	abstract Draw():void;
}