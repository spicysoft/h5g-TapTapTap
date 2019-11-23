var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameObject = (function () {
    function GameObject() {
        this.DestroyFlag = false;
        this.Shape = null;
        this.Object = null;
        this.Object = new egret.DisplayObjectContainer();
        GameObject.Objects.push(this);
        GameObject.Display.addChild(this.Object);
    }
    GameObject.Init = function (TargetDisplayOC) {
        GameObject.Objects = [];
        GameObject.Display = TargetDisplayOC;
    };
    GameObject.UpdateAll = function () {
        GameObject.Objects.forEach(function (Obj) { return Obj.Update(); });
        GameObject.Objects = GameObject.Objects.filter(function (Obj) {
            if (Obj.DestroyFlag == true) {
                Obj.Delete();
            }
            return (!Obj.DestroyFlag);
        });
    };
    GameObject.DrawAll = function () {
        GameObject.Objects.forEach(function (Obj) { return Obj.Draw(); });
    };
    GameObject.DestroyAll = function () {
        GameObject.Objects.forEach(function (Obj) { return Obj.Delete(); });
    };
    GameObject.prototype.Delete = function () {
        this.OnDestroy();
    };
    GameObject.Objects = [];
    return GameObject;
}());
__reflect(GameObject.prototype, "GameObject");
//# sourceMappingURL=GameObject.js.map