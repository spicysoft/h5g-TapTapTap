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
var UICompornent = (function (_super) {
    __extends(UICompornent, _super);
    function UICompornent() {
        var _this = _super.call(this) || this;
        _this.Display = null;
        _this.DestroyFlag = false;
        _this.Init();
        return _this;
    }
    UICompornent.prototype.Init = function () {
        this.Display = new egret.DisplayObjectContainer();
        UILayer.Display.addChild(this.Display);
        UICompornent.Compornents.push(this);
    };
    UICompornent.UpdateAll = function () {
        UICompornent.Compornents.forEach(function (Obj) { return Obj.Update(); });
        UICompornent.Compornents = UICompornent.Compornents.filter(function (Obj) {
            if (Obj.DestroyFlag == true) {
                Obj.Delete();
            }
            return (!Obj.DestroyFlag);
        });
    };
    UICompornent.DrawAll = function () {
        UICompornent.Compornents.forEach(function (Obj) { return Obj.Draw(); });
    };
    UICompornent.DestroyAll = function () {
        UICompornent.Compornents.forEach(function (Obj) { return Obj.Delete(); });
    };
    UICompornent.prototype.SetDeleteFlag = function () {
        this.DestroyFlag = true;
    };
    UICompornent.prototype.Delete = function () {
        this.OnDestroy();
    };
    UICompornent.Compornents = [];
    return UICompornent;
}(egret.DisplayObjectContainer));
__reflect(UICompornent.prototype, "UICompornent");
var TextComp = (function (_super) {
    __extends(TextComp, _super);
    function TextComp(PosX, PosY, SetText, Size, ScaleX, ScaleY, Color, Bold) {
        var _this = _super.call(this) || this;
        _this.OutputText = "";
        _this.TextF = null;
        _this.TextF = new egret.TextField();
        _this.TextF.x = PosX;
        _this.TextF.y = PosY;
        _this.TextF.text = SetText;
        _this.TextF.bold = Bold;
        _this.TextF.size = Size;
        _this.TextF.scaleX = ScaleX;
        _this.TextF.scaleY = ScaleY;
        _this.TextF.textColor = Color;
        _this.Display.addChild(_this.TextF);
        return _this;
    }
    TextComp.prototype.SetText = function (SetText) {
        this.TextF.text = SetText;
    };
    TextComp.prototype.Update = function () { };
    ;
    TextComp.prototype.OnDestroy = function () {
        UILayer.Display.removeChild(this.TextF);
        this.TextF = null;
    };
    ;
    TextComp.prototype.Draw = function () { };
    ;
    TextComp.prototype.CreateText = function (PosX, PosY, SetText, Size, ScaleX, ScaleY, Color, Bold) {
        var ReturnTF = new egret.TextField();
        ReturnTF.x = PosX;
        ReturnTF.y = PosY;
        ReturnTF.text = SetText;
        ReturnTF.bold = Bold;
        ReturnTF.size = Size;
        ReturnTF.scaleX = ScaleX;
        ReturnTF.scaleY = ScaleY;
        ReturnTF.textColor = Color;
        return ReturnTF;
    };
    return TextComp;
}(UICompornent));
__reflect(TextComp.prototype, "TextComp");
var BackGround = (function (_super) {
    __extends(BackGround, _super);
    function BackGround(SetPosX, SetPosY, SetWidth, SetHeight) {
        return _super.call(this, SetPosX, SetPosY, SetWidth, SetHeight) || this;
    }
    return BackGround;
}(Rect));
__reflect(BackGround.prototype, "BackGround");
//# sourceMappingURL=Main.js.map