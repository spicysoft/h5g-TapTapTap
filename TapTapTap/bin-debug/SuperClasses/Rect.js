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
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect(SetPosX, SetPosY, SetWidth, SetHeight) {
        var _this = _super.call(this) || this;
        _this.RectSetting();
        _this.PosX = SetPosX;
        _this.PosY = SetPosY;
        _this.Width = SetWidth;
        _this.Height = SetHeight;
        return _this;
    }
    Rect.prototype.RectSetting = function () {
        this.Shape = new egret.Shape();
        this.Width = 0;
        this.Height = 0;
        this.PosX = 0;
        this.PosY = 0;
        GameObject.Display.addChild(this.Shape);
    };
    Rect.prototype.Draw = function () {
        var Graphics = this.Shape.graphics;
        Graphics.clear();
        Graphics.beginFill(0x0000ff);
        Graphics.drawRect(this.PosX, this.PosY, this.Width, this.Height);
        Graphics.endFill();
    };
    Rect.prototype.Update = function () { };
    ;
    Rect.prototype.OnDestroy = function () { };
    ;
    return Rect;
}(GameObject));
__reflect(Rect.prototype, "Rect");
//# sourceMappingURL=Rect.js.map