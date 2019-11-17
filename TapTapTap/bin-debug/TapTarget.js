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
var GameObject = (function (_super) {
    __extends(GameObject, _super);
    function GameObject() {
        var _this = _super.call(this) || this;
        _this.Object = null;
        _this.Init();
        return _this;
    }
    GameObject.prototype.Init = function () {
        this.Object = new egret.DisplayObjectContainer();
        BackGround.Display.addChild(this.Object);
        GameObject.Objects.push(this);
    };
    GameObject.Objects = [];
    return GameObject;
}(egret.DisplayObjectContainer));
__reflect(GameObject.prototype, "GameObject");
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
    };
    Circle.prototype.Draw = function () {
        var Graphics = this.Shape.graphics;
        Graphics.beginFill(0xffff00);
        Graphics.drawCircle(this.PosX, this.PosY, 100);
        Graphics.endFill();
        this.Object.addChild(this.Shape);
    };
    return Circle;
}(GameObject));
__reflect(Circle.prototype, "Circle");
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
    };
    Rect.prototype.Draw = function () {
        var Graphics = this.Shape.graphics;
        Graphics.beginFill(0x0000ff);
        Graphics.drawRect(this.PosX, this.PosY, this.width, this.height);
        Graphics.endFill();
        this.Object.addChild(this.Shape);
    };
    return Rect;
}(GameObject));
__reflect(Rect.prototype, "Rect");
var TapTarget = (function (_super) {
    __extends(TapTarget, _super);
    function TapTarget(SetPosX, SetPosY) {
        var _this = _super.call(this) || this;
        _this.TargetInit();
        _this.PosX = SetPosX;
        _this.PosY = SetPosY;
        _this.Draw();
        return _this;
    }
    TapTarget.prototype.TargetInit = function () {
        this.Height = egret.MainContext.instance.stage.stageHeight;
        this.Width = egret.MainContext.instance.stage.stageWidth;
        this.Object.touchEnabled = true;
        this.Object.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
    };
    TapTarget.prototype.TapEvent = function () {
        console.log("TAP!!!!");
    };
    return TapTarget;
}(Circle));
__reflect(TapTarget.prototype, "TapTarget");
//# sourceMappingURL=TapTarget.js.map