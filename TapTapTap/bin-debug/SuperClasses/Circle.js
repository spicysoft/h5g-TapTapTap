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
        this.Shape = new egret.Shape();
        this.Object.addChild(this.Shape);
    };
    Circle.prototype.Draw = function () {
        var Graphics = this.Shape.graphics;
        Graphics.clear();
        Graphics.beginFill(0xffff00);
        Graphics.drawCircle(this.PosX, this.PosY, 100);
        Graphics.endFill();
    };
    Circle.prototype.Update = function () { };
    ;
    Circle.prototype.OnDestroy = function () { };
    ;
    return Circle;
}(GameObject));
__reflect(Circle.prototype, "Circle");
//# sourceMappingURL=Circle.js.map