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
        _this.TargetInit();
        _this.PosX = SetPosX;
        _this.PosY = SetPosY;
        _this.PosX = TapTarget.GetRandomInt(100.0, 620.0);
        _this.Speed = TapTarget.GetRandomInt(3.0, 17.0);
        _this.Color = 0x738b2a;
        _this.Alpha = 1;
        _this.SetIndexNum(-1);
        _this.Object.x = _this.PosX;
        _this.Object.y = _this.PosY;
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
        new CircleExpandEffect(this.PosX, this.PosY, 70, 0x738b2a);
        this.DestroyFlag = true;
    };
    TapTarget.prototype.Update = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            return;
        }
        if (this.PosY > 200) {
            this.PosY -= this.Speed;
            this.Object.x = this.PosX;
            this.Object.y = this.PosY;
        }
        else {
            GameManager.GetInstance().SetGameStatus(GameStatus.Result);
            return;
        }
    };
    ;
    TapTarget.prototype.OnDestroy = function () {
        this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
        _super.prototype.OnDestroy.call(this);
    };
    ;
    TapTarget.GetRandomInt = function (Min, Max) {
        return Math.floor(Min + Math.random() * (Max + 0.999 - Min));
    };
    return TapTarget;
}(Circle));
__reflect(TapTarget.prototype, "TapTarget");
var TapTarget_2 = (function (_super) {
    __extends(TapTarget_2, _super);
    function TapTarget_2(SetPosX, SetPosY) {
        var _this = _super.call(this) || this;
        _this.Tag = "Target";
        _this.TargetInit();
        _this.PosX = SetPosX;
        _this.PosY = SetPosY;
        _this.BaseX = SetPosX;
        _this.PosX = TapTarget.GetRandomInt(100.0, 620.0);
        _this.Speed = TapTarget.GetRandomInt(3.0, 17.0);
        _this.Color = 0x738b2a;
        _this.Alpha = 1;
        _this.SetIndexNum(-1);
        _this.Object.x = _this.PosX;
        _this.Object.y = _this.PosY;
        _this.Draw();
        return _this;
    }
    TapTarget_2.prototype.TargetInit = function () {
        this.Height = egret.MainContext.instance.stage.stageHeight;
        this.Width = egret.MainContext.instance.stage.stageWidth;
        this.Object.touchEnabled = true;
        this.Object.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
    };
    TapTarget_2.prototype.TapEvent = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
            return;
        }
        egret.log("TAP!!!!");
        GameManager.GetInstance().AddScore(1);
        new CircleExpandEffect(this.PosX, this.PosY, 70, 0x738b2a);
        this.DestroyFlag = true;
    };
    TapTarget_2.prototype.Update = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            return;
        }
        if (this.PosY > 200) {
            this.PosY -= this.Speed;
            egret.Tween.get(this, { loop: true }).to({ PosX: this.BaseX - 100 }, 500).to({ PosX: this.BaseX }, 500).to({ PosX: this.BaseX + 100 }, 500).to({ PosX: this.BaseX }, 500);
            this.Object.x = this.PosX;
            this.Object.y = this.PosY;
        }
        else {
            GameManager.GetInstance().SetGameStatus(GameStatus.Result);
            return;
        }
    };
    ;
    TapTarget_2.prototype.OnDestroy = function () {
        this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
        _super.prototype.OnDestroy.call(this);
    };
    ;
    TapTarget_2.GetRandomInt = function (Min, Max) {
        return Math.floor(Min + Math.random() * (Max + 0.999 - Min));
    };
    return TapTarget_2;
}(Circle));
__reflect(TapTarget_2.prototype, "TapTarget_2");
var DummyTarget = (function (_super) {
    __extends(DummyTarget, _super);
    function DummyTarget(SetPosX, SetPosY) {
        var _this = _super.call(this) || this;
        _this.Tag = "Target";
        _this.TargetInit();
        _this.PosX = SetPosX;
        _this.PosY = SetPosY;
        _this.SetIndexNum(-1);
        _this.PosX = TapTarget.GetRandomInt(100.0, 620.0);
        _this.Speed = TapTarget.GetRandomInt(3.0, 17.0);
        _this.Alpha = 1;
        _this.Object.x = _this.PosX;
        _this.Object.y = _this.PosY;
        _this.Draw();
        _this.Object.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.TapEvent, _this);
        return _this;
    }
    DummyTarget.prototype.TargetInit = function () {
        this.Height = egret.MainContext.instance.stage.stageHeight;
        this.Width = egret.MainContext.instance.stage.stageWidth;
        this.Object.touchEnabled = true;
    };
    DummyTarget.prototype.TapEvent = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
            return;
        }
        egret.log("TAP!!!!");
        GameManager.GetInstance().AddScore(-2);
        new CircleExpandEffect(this.PosX, this.PosY, 70, 0x621122);
        this.DestroyFlag = true;
    };
    DummyTarget.prototype.Update = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            return;
        }
        if (this.PosY > 200) {
            this.PosY -= this.Speed;
            this.Object.x = this.PosX;
            this.Object.y = this.PosY;
        }
        else {
            this.DestroyFlag = true;
            new CircleExpandEffect(this.PosX, this.PosY, 70, 0x251025);
            return;
        }
    };
    ;
    DummyTarget.prototype.OnDestroy = function () {
        new CircleExpandEffect(this.PosX, this.PosY, 70, 0x621122);
        _super.prototype.OnDestroy.call(this);
    };
    ;
    DummyTarget.GetRandomInt = function (Min, Max) {
        return Math.floor(Min + Math.random() * (Max + 0.999 - Min));
    };
    return DummyTarget;
}(Circle));
__reflect(DummyTarget.prototype, "DummyTarget");
var DummyTarget_2 = (function (_super) {
    __extends(DummyTarget_2, _super);
    function DummyTarget_2(SetPosX, SetPosY) {
        var _this = _super.call(this) || this;
        _this.Tag = "Target";
        _this.NowFrame = 0;
        _this.TargetInit();
        _this.PosX = SetPosX;
        _this.BaseX = SetPosX;
        _this.PosY = SetPosY;
        _this.SetIndexNum(-1);
        _this.PosX = TapTarget.GetRandomInt(100.0, 620.0);
        _this.Speed = TapTarget.GetRandomInt(3.0, 17.0);
        _this.Alpha = 1;
        _this.Object.x = _this.PosX;
        _this.Object.y = _this.PosY;
        _this.Draw();
        _this.Object.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.TapEvent, _this);
        return _this;
    }
    DummyTarget_2.prototype.TargetInit = function () {
        this.Height = egret.MainContext.instance.stage.stageHeight;
        this.Width = egret.MainContext.instance.stage.stageWidth;
        this.Object.touchEnabled = true;
    };
    DummyTarget_2.prototype.TapEvent = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
            return;
        }
        egret.log("TAP!!!!");
        GameManager.GetInstance().AddScore(-2);
        this.DestroyFlag = true;
    };
    DummyTarget_2.prototype.Update = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.MainGame) {
            return;
        }
        if (this.PosY > 200) {
            this.PosY -= this.Speed;
            egret.Tween.get(this, { loop: true }).to({ PosX: this.BaseX - 100 }, 500).to({ PosX: this.BaseX }, 500).to({ PosX: this.BaseX + 100 }, 500).to({ PosX: this.BaseX }, 500);
            this.Object.x = this.PosX;
            this.Object.y = this.PosY;
        }
        else {
            this.DestroyFlag = true;
            new CircleExpandEffect(this.PosX, this.PosY, 70, 0x251025);
            return;
        }
    };
    ;
    DummyTarget_2.prototype.OnDestroy = function () {
        this.Object.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.TapEvent, this);
        _super.prototype.OnDestroy.call(this);
    };
    ;
    DummyTarget_2.GetRandomInt = function (Min, Max) {
        return Math.floor(Min + Math.random() * (Max + 0.999 - Min));
    };
    return DummyTarget_2;
}(Circle));
__reflect(DummyTarget_2.prototype, "DummyTarget_2");
var ButtonComp = (function (_super) {
    __extends(ButtonComp, _super);
    function ButtonComp(SetPosX, SetPosY) {
        var _this = _super.call(this, SetPosX - 520 / 2, SetPosY - 120 / 2, 520, 120) || this;
        _this.Tag = "Button";
        _this.TargetImage = new ImageComp("resource/Button.png", SetPosX, SetPosY, 520, 120, 1, 1);
        _this.SetIndexNum(-1);
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
var AllScreenButtonComp = (function (_super) {
    __extends(AllScreenButtonComp, _super);
    function AllScreenButtonComp(SetPosX, SetPosY) {
        var _this = _super.call(this, 0, 0, 720, 1280) || this;
        _this.Tag = "Button";
        _this.SetIndexNum(-1);
        _this.Alpha = 0;
        _this.Color = 0xff2222;
        _this.TargetInit();
        _this.Object.touchEnabled = true;
        _this.Draw();
        return _this;
    }
    AllScreenButtonComp.prototype.TargetInit = function () {
        this.Object.touchEnabled = true;
        this.Object.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.TapEvent, this);
    };
    AllScreenButtonComp.prototype.TapEvent = function () {
        if (GameManager.GetInstance().GetGameStatus() != GameStatus.Result) {
            this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.TapEvent, this);
            return;
        }
        egret.log("TAP!!!!");
        GameManager.GetInstance().ResetGame();
        this.DestroyFlag = true;
    };
    AllScreenButtonComp.prototype.Update = function () { };
    ;
    AllScreenButtonComp.prototype.OnDestroy = function () {
        this.Object.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.TapEvent, this);
        _super.prototype.OnDestroy.call(this);
    };
    ;
    return AllScreenButtonComp;
}(Rect));
__reflect(AllScreenButtonComp.prototype, "AllScreenButtonComp");
//# sourceMappingURL=TapTarget.js.map