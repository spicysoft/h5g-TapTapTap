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
var CircleExpandEffect = (function (_super) {
    __extends(CircleExpandEffect, _super);
    function CircleExpandEffect(PosX, PosY, Radius, Color) {
        if (Color === void 0) { Color = 0xffffff; }
        var _this = _super.call(this) || this;
        _this.NowFrame = CircleExpandEffect.Max;
        _this.Radius = Radius;
        _this.Color = Color;
        _this.Shape = new egret.Shape();
        _this.Object.addChild(_this.Shape);
        GameObject.Display.setChildIndex(_this.Object, 6);
        _this.Shape.x = PosX;
        _this.Shape.y = PosY;
        return _this;
    }
    CircleExpandEffect.prototype.Update = function () {
        if (this.NowFrame < 0) {
            this.DestroyFlag = true;
            return;
        }
        this.Radius *= 1.03;
        this.NowFrame--;
    };
    CircleExpandEffect.prototype.OnDestroy = function () {
        this.Object.removeChild(this.Shape);
        this.Shape = null;
    };
    CircleExpandEffect.prototype.Draw = function () {
        var Graphics = this.Shape.graphics;
        Graphics.clear();
        Graphics.lineStyle(3 + 10 * (this.NowFrame / CircleExpandEffect.Max), this.Color);
        Graphics.drawCircle(0, 0, this.Radius);
    };
    CircleExpandEffect.Max = 30;
    return CircleExpandEffect;
}(GameObject));
__reflect(CircleExpandEffect.prototype, "CircleExpandEffect");
//# sourceMappingURL=Effect.js.map