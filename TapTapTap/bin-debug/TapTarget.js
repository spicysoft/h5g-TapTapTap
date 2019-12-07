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
        _this.TargetImage = new ImageComp("resource/Target_1_160.png", 0, 0, 160, 160, 1, 1);
        _this.TargetInit();
        _this.PosX = SetPosX;
        _this.PosY = SetPosY;
        _this.PosX = TapTarget.GetRandomInt(100.0, 620.0);
        _this.Speed = TapTarget.GetRandomInt(3.0, 17.0);
        _this.Alpha = 0.1;
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
        GameManager.GetInstance().AddScore(1);
        new CircleExpandEffect(this.PosX, this.PosY, 70, 0xf5f5f5);
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
        this.TargetImage.SetPos(this.PosX, this.PosY);
    };
    ;
    TapTarget.prototype.OnDestroy = function () {
        this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
        this.TargetImage.OnDestroy();
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
        _this.TargetImage = new ImageComp("resource/Target_2_160.png", 0, 0, 160, 160, 1, 1);
        _this.TargetInit();
        _this.PosX = SetPosX;
        _this.PosY = SetPosY;
        _this.PosX = TapTarget.GetRandomInt(100.0, 620.0);
        _this.Speed = TapTarget.GetRandomInt(3.0, 17.0);
        _this.Alpha = 0.3;
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
        new CircleExpandEffect(this.PosX, this.PosY, 70, 0x101010);
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
            GameManager.GetInstance().AddScore(1);
            return;
        }
        this.TargetImage.SetPos(this.PosX, this.PosY);
    };
    ;
    DummyTarget.prototype.OnDestroy = function () {
        this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
        this.TargetImage.OnDestroy();
        _super.prototype.OnDestroy.call(this);
    };
    ;
    DummyTarget.GetRandomInt = function (Min, Max) {
        return Math.floor(Min + Math.random() * (Max + 0.999 - Min));
    };
    return DummyTarget;
}(Circle));
__reflect(DummyTarget.prototype, "DummyTarget");
var ButtonComp = (function (_super) {
    __extends(ButtonComp, _super);
    function ButtonComp(SetPosX, SetPosY) {
        var _this = _super.call(this, SetPosX - 520 / 2, SetPosY - 120 / 2, 520, 120) || this;
        _this.Tag = "Button";
        _this.TargetImage = new ImageComp("resource/Button.png", SetPosX, SetPosY, 520, 120, 1, 1);
        _this.Alpha = 1;
        _this.Color = 0xff2222;
        _this.TargetInit();
        _this.Object.touchEnabled = true;
        _this.Draw();
        return _this;
    }
    ButtonComp.prototype.TargetInit = function () {
        this.Object.touchEnabled = true;
        this.Object.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
    };
    ButtonComp.prototype.TapEvent = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.Result) {
            this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
            return;
        }
        egret.log("TAP!!!!");
        GameManager.GetInstance().ResetGame();
        this.DestroyFlag = true;
    };
    ButtonComp.prototype.Update = function () { };
    ;
    ButtonComp.prototype.OnDestroy = function () {
        this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
        this.TargetImage.OnDestroy();
        _super.prototype.OnDestroy.call(this);
    };
    ;
    return ButtonComp;
}(Rect));
__reflect(ButtonComp.prototype, "ButtonComp");
//# sourceMappingURL=TapTarget.js.map