abstract class GameObject
{
    static Objects: GameObject[] = [];
 	public static Display: egret.DisplayObjectContainer;

	protected DestroyFlag :boolean=false;
	protected Shape :egret.Shape=null;
	protected Object: egret.DisplayObjectContainer = null;
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
    }
 
    static UpdateAll()
    {
       GameObject.Objects.forEach(Obj=>Obj.Update());
	   GameObject.Objects=GameObject.Objects.filter(Obj=>{
		   								if(Obj.DestroyFlag==true)
										{
											Obj.Delete();
										}
										return (!Obj.DestroyFlag);
									});
    }

	static DrawAll()
	{
		GameObject.Objects.forEach(Obj=>Obj.Draw());
	}

	static DestroyAll()
	{
		GameObject.Objects.forEach(Obj=>Obj.Delete());
	}

	abstract Update():void;

	private Delete()
	{
	this.OnDestroy();
	}

	abstract OnDestroy():void;

	abstract Draw():void;
}