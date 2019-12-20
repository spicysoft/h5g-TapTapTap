var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameObject = (function () {
    function GameObject() {
        this.DestroyFlag = false;
        this.Shape = null;
        this.Object = null;
        this.Tag = "Default";
        this.Object = new egret.DisplayObjectContainer();
        GameObject.Objects.push(this);
        GameObject.Display.addChild(this.Object);
    }
    GameObject.Init = function (TargetDisplayOC) {
        GameObject.Objects = [];
        GameObject.Display = TargetDisplayOC;
        GameObject.Time = 0;
        GameObject.FixedTime = 0;
    };
    GameObject.UpdateAll = function (timeStamp) {
        GameObject.FixedTime = timeStamp - GameObject.Time;
        GameObject.Time = timeStamp;
        console.log("Fixed", GameObject.FixedTime.toFixed());
        GameObject.Objects.forEach(function (Obj) { return Obj.Update(); });
        GameObject.Objects = GameObject.Objects.filter(function (Obj) {
            if (Obj.DestroyFlag == true) {
                Obj.Delete();
            }
            return (!Obj.DestroyFlag);
        });
    };
    //現在インスタンスされているオブジェクト群から指定タグと合致するものを検索しリストを返す
    GameObject.FindObjects = function (TargetTag) {
        return GameObject.Objects.filter(function (Obj) { return Obj.Tag == TargetTag; });
    };
    GameObject.DrawAll = function () {
        GameObject.Objects.forEach(function (Obj) { return Obj.Draw(); });
    };
    GameObject.DestroyAll = function () {
        GameObject.Objects.forEach(function (Obj) { return Obj.Destroy(); });
    };
    GameObject.prototype.Destroy = function () {
        this.DestroyFlag = true;
    };
    GameObject.prototype.Delete = function () {
        this.OnDestroy();
        if (this.Shape != null) {
            GameObject.Display.removeChild(this.Shape);
            this.Shape = null;
        }
    };
    GameObject.prototype.GetPosX = function () {
        return this.Object.x;
    };
    GameObject.prototype.GetPosY = function () {
        return this.Object.y;
    };
    GameObject.Objects = [];
    return GameObject;
}());
__reflect(GameObject.prototype, "GameObject");
//# sourceMappingURL=GameObject.js.map