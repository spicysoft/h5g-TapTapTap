var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this) || this;
        _this.CircleSetting();
        return _this;
    }
    Circle.prototype.CircleSetting = function () {
        this.PosX = 150;
        this.PosY = 150;
        this.Alpha = 1;
        this.Color = 0x251025;
        this.Shape = new egret.Shape();
        this.Object.addChild(this.Shape);
    };
    Circle.prototype.SetIndexNum = function (Num) {
        GameObject.Display.setChildIndex(this.Object, Num);
    };
    Circle.prototype.SetColor = function (SetCol) {
        this.Color = SetCol;
    };
    Circle.prototype.SetAlpha = function (SetAlp) {
        this.Alpha = SetAlp;
    };
    Circle.prototype.Draw = function () {
        var Graphics = this.Shape.graphics;
        Graphics.clear();
        Graphics.beginFill(this.Color, this.Alpha);
        //Graphics.drawCircle(this.PosX,this.PosY,85);
        Graphics.drawCircle(0, 0, 85);
        Graphics.endFill();
    };
    Circle.prototype.Update = function () {
        this.Object.x = this.PosX;
        this.Object.y = this.PosY;
    };
    ;
    Circle.prototype.OnDestroy = function () {
        this.Object.removeChild(this.Shape);
        this.Shape = null;
    };
    ;
    return Circle;
}(GameObject));
__reflect(Circle.prototype, "Circle");
//# sourceMappingURL=Circle.js.map