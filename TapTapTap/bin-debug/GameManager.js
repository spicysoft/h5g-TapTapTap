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
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["Title"] = 0] = "Title";
    GameStatus[GameStatus["MainGame"] = 1] = "MainGame";
    GameStatus[GameStatus["Result"] = 2] = "Result";
})(GameStatus || (GameStatus = {}));
var GameManager = (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super.call(this) || this;
        _this.NowStatus = GameStatus.MainGame;
        _this.Score = 0;
        _this.ScoreTex = null;
        _this.EmitTime = 500;
        _this.EmitCount = 0;
        _this.TotalEmitCount = 0;
        GameManager.Instance = _this;
        _this.Time = new egret.Timer(_this.EmitTime, 0);
        _this.Time.addEventListener(egret.TimerEvent.TIMER, _this.EmitTarget, _this);
        _this.GameInit();
        _this.Object.touchEnabled = true;
        _this.Head = new Rect(0, 0, 1280, 60);
        _this.Head.SetColor(0x121212);
        _this.Head.SetAlpha(0.5);
        _this.DeadZone = new Rect(0, 0, 1280, 200);
        _this.DeadZone.SetColor(0xd8574a);
        _this.DeadZone.SetAlpha(1);
        _this.DeadZone.SetIndexNum(10);
        _this.Head.SetIndexNum(-1);
        GameObject.Display.once(egret.TouchEvent.TOUCH_BEGIN, _this.GameStart, _this);
        return _this;
    }
    GameManager.GetInstance = function () {
        if (GameManager.Instance == null) {
            GameManager.Instance == new GameManager();
        }
        return GameManager.Instance;
    };
    GameManager.prototype.GameInit = function () {
        this.NowStatus = GameStatus.Title;
        this.Score = 0;
        this.EmitTime = 500;
        this.EmitCount = 0;
        this.TotalEmitCount = 0;
        this.Time.delay = this.EmitTime;
        var Targets = GameObject.FindObjects("Target");
        Targets.forEach(function (Obj) { return Obj.Destroy(); });
        this.TitleWindow = new TitleWindowComp(720 / 2, 1280 / 2 - 100);
        if (this.Button != null) {
            this.Button.Destroy();
            this.Button = null;
        }
        if (this.Window != null) {
            this.Window.OnDestroy();
            this.Window = null;
        }
        if (this.ScoreTex == null) {
            this.ScoreTex = new TextComp(0, 0, "SCORE:0", 100, 0.5, 0.5, 0xeae8db, true, false);
            this.ScoreTex.SetIndexNum(0);
        }
        this.ScoreTex.SetText("SCORE:" + this.Score.toFixed());
    };
    GameManager.prototype.Update = function () {
        this.ScoreTex.SetText("SCORE:" + this.Score.toFixed());
    };
    ;
    GameManager.prototype.OnDestroy = function () { };
    ;
    GameManager.prototype.Draw = function () { };
    ;
    GameManager.prototype.ResetGame = function () {
        GameObject.Display.once(egret.TouchEvent.TOUCH_BEGIN, this.GameStart, this);
        this.GameInit();
    };
    GameManager.prototype.GameStart = function () {
        this.NowStatus = GameStatus.MainGame;
        this.TitleWindow.OnDestroy();
        this.TitleWindow = null;
        this.Time.start();
    };
    GameManager.prototype.AddScore = function (AddValue) {
        this.Score += AddValue;
        if (this.Score < 0) {
            this.Score = 0;
            this.SetGameStatus(GameStatus.Result);
        }
    };
    GameManager.prototype.GetGameStatus = function () {
        return this.NowStatus;
    };
    ;
    GameManager.prototype.SetGameStatus = function (Status) {
        if (Status == GameStatus.Result) {
            var Targets = GameObject.FindObjects("Target");
            Targets.forEach(function (Obj) {
                new CircleExpandEffect(Obj.GetPosX(), Obj.GetPosY(), 70, 0x621122);
                Obj.Destroy();
            });
            this.Button = new AllScreenButtonComp(720 / 2, 1280 / 2 + 400);
            this.Window = new WindowComp("SCORE", this.Score.toFixed(), 720 / 2, 1280 / 2);
        }
        this.NowStatus = Status;
    };
    GameManager.prototype.EmitTarget = function () {
        if (this.NowStatus != GameStatus.MainGame) {
            return;
        }
        if (GameManager.GetRandomInt(1, 2) % 2 == 1) {
            if (this.TotalEmitCount >= 50 && this.TotalEmitCount % 6 == 0) {
                new TapTarget_2(MainGame.Width / 2, MainGame.Height);
            }
            else {
                new TapTarget(MainGame.Width / 2, MainGame.Height);
            }
        }
        else {
            if (this.TotalEmitCount >= 30 && this.TotalEmitCount % 8 == 0) {
                new DummyTarget_2(MainGame.Width / 2, MainGame.Height);
            }
            else {
                new DummyTarget(MainGame.Width / 2, MainGame.Height);
            }
        }
        this.EmitCount++;
        this.TotalEmitCount++;
        if (this.EmitCount >= 20) {
            this.Time.delay = this.Time.delay > 100 ? this.Time.delay - 20 : this.Time.delay;
            this.EmitCount = 0;
        }
    };
    GameManager.GetRandomInt = function (Min, Max) {
        return Math.floor(Min + Math.random() * (Max + 0.999 - Min));
    };
    GameManager.Instance = null;
    return GameManager;
}(GameObject));
__reflect(GameManager.prototype, "GameManager");
//# sourceMappingURL=GameManager.js.map