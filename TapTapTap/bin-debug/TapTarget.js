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
var TapTarget = (function (_super) {
    __extends(TapTarget, _super);
    function TapTarget(SetPosX, SetPosY) {
        var _this = _super.call(this) || this;
        _this.Tag = "Target";
        var LoadImage = new eui.Image();
        LoadImage.source = "resource/Target1.png";
        _this.Image = LoadImage;
        _this.Object.addChild(_this.Image);
        _this.TargetInit();
        _this.PosX = SetPosX;
        _this.PosY = SetPosY;
        _this.PosX = TapTarget.GetRandomInt(100, 620);
        _this.Speed = TapTarget.GetRandomInt(5.0, 15.0);
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
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
            return;
        }
        egret.log("TAP!!!!");
        GameManager.GetInstance().AddScore(100);
        this.DestroyFlag = true;
    };
    TapTarget.prototype.Update = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            return;
        }
        if (this.PosY > 200) {
            this.PosY -= this.Speed;
        }
        else {
            //this.DestroyFlag=true;
            GameManager.GetInstance().SetGameStatus(GameStatus.Result);
            return;
        }
    };
    ;
    TapTarget.prototype.OnDestroy = function () {
        this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
        if (this.Image != null) {
            this.Object.removeChild(this.Image);
            this.Image = null;
        }
        _super.prototype.OnDestroy.call(this);
    };
    ;
    TapTarget.GetRandomInt = function (Min, Max) {
        return Math.floor(Min + Math.random() * (Max + 0.999 - Min));
    };
    return TapTarget;
}(Circle));
__reflect(TapTarget.prototype, "TapTarget");
var DummyTarget = (function (_super) {
    __extends(DummyTarget, _super);
    function DummyTarget(SetPosX, SetPosY) {
        var _this = _super.call(this) || this;
        _this.Tag = "Target";
        var LoadImage = new eui.Image();
        LoadImage.source = "resource/Target2.png";
        _this.Image = LoadImage;
        _this.Object.addChild(_this.Image);
        _this.TargetInit();
        _this.PosX = SetPosX;
        _this.PosY = SetPosY;
        _this.PosX = TapTarget.GetRandomInt(100, 620);
        _this.Speed = TapTarget.GetRandomInt(5.0, 15.0);
        _this.Draw();
        return _this;
    }
    DummyTarget.prototype.TargetInit = function () {
        this.Height = egret.MainContext.instance.stage.stageHeight;
        this.Width = egret.MainContext.instance.stage.stageWidth;
        this.Object.touchEnabled = true;
        this.Object.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
    };
    DummyTarget.prototype.TapEvent = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
            return;
        }
        egret.log("TAP!!!!");
        GameManager.GetInstance().SetGameStatus(GameStatus.Result);
        this.DestroyFlag = true;
    };
    DummyTarget.prototype.Update = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            return;
        }
        if (this.PosY > 200) {
            this.PosY -= this.Speed;
        }
        else {
            //ダミーマトの場合は加算する
            this.DestroyFlag = true;
            GameManager.GetInstance().AddScore(100);
            return;
        }
    };
    ;
    DummyTarget.prototype.OnDestroy = function () {
        this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
        if (this.Image != null) {
            this.Object.removeChild(this.Image);
            this.Image = null;
        }
        _super.prototype.OnDestroy.call(this);
    };
    ;
    DummyTarget.GetRandomInt = function (Min, Max) {
        return Math.floor(Min + Math.random() * (Max + 0.999 - Min));
    };
    return DummyTarget;
}(Circle));
__reflect(DummyTarget.prototype, "DummyTarget");
//# sourceMappingURL=TapTarget.js.map