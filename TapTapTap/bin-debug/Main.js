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
        egret.startTick(this.tickLoop, this);
        MainGame.Init(this.stage);
    };
    Main.prototype.tickLoop = function (timeStamp) {
        return false;
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var MainGame = (function () {
    function MainGame() {
    }
    MainGame.Init = function (Stage) {
        MainGame.Target = this;
        MainGame.Height = egret.MainContext.instance.stage.stageHeight;
        MainGame.Width = egret.MainContext.instance.stage.stageWidth;
        MainGame.MainStage = Stage;
        new BackGround();
        new TapTarget(200, 200);
    };
    return MainGame;
}());
__reflect(MainGame.prototype, "MainGame");
var BackGround = (function (_super) {
    __extends(BackGround, _super);
    function BackGround() {
        var _this = _super.call(this) || this;
        _this.Init();
        var BG = new Rect(_this.Width / 2, _this.Height / 2, _this.Width, _this.Height);
        BG.Draw();
        return _this;
    }
    BackGround.prototype.Init = function () {
        BackGround.Display = new egret.DisplayObjectContainer();
        MainGame.MainStage.addChild(BackGround.Display);
        this.Height = egret.MainContext.instance.stage.stageHeight;
        this.Width = egret.MainContext.instance.stage.stageWidth;
    };
    BackGround.Display = null;
    return BackGround;
}(egret.DisplayObjectContainer));
__reflect(BackGround.prototype, "BackGround");
//# sourceMappingURL=Main.js.map