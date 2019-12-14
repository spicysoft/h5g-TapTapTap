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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    Main.prototype.addToStage = function () {
        GameObject.Init(this.stage);
        MainGame.Init(this.stage);
        egret.startTick(this.tickLoop, this);
    };
    Main.prototype.tickLoop = function (timeStamp) {
        GameObject.UpdateAll();
        GameObject.DrawAll();
        return true;
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var MainGame = (function () {
    function MainGame() {
    }
    MainGame.Init = function (Stage) {
        MainGame.Height = egret.MainContext.instance.stage.stageHeight;
        MainGame.Width = egret.MainContext.instance.stage.stageWidth;
        MainGame.MainStage = Stage;
        new BackGround(0, 0, MainGame.Width, MainGame.Height);
        new UILayer();
        new GameManager();
        MainGame.MainStage.setChildIndex(UILayer.Display, -1);
    };
    return MainGame;
}());
__reflect(MainGame.prototype, "MainGame");
var UILayer = (function () {
    function UILayer() {
        this.Init();
    }
    UILayer.prototype.Init = function () {
        UILayer.Display = new eui.UILayer();
        MainGame.MainStage.addChild(UILayer.Display);
    };
    UILayer.Display = null;
    return UILayer;
}());
__reflect(UILayer.prototype, "UILayer");
var BackGround = (function (_super) {
    __extends(BackGround, _super);
    function BackGround(SetPosX, SetPosY, SetWidth, SetHeight) {
        var _this = _super.call(this, SetPosX, SetPosY, SetWidth, SetHeight) || this;
        _this.SetColor(0xecce9e);
        return _this;
    }
    return BackGround;
}(Rect));
__reflect(BackGround.prototype, "BackGround");
//# sourceMappingURL=Main.js.map