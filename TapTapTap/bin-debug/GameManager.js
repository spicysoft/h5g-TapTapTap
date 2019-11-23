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
        _this.ScoreTex = null;
        var Time = new egret.Timer(500, 0);
        Time.addEventListener(egret.TimerEvent.TIMER, _this.EmitTarget, _this);
        Time.start();
        _this.GameInit();
        return _this;
    }
    GameManager.prototype.GameInit = function () {
        GameManager.NowStatus = GameStatus.MainGame;
        GameManager.Score = 0;
        GameObject.DestroyAll();
        this.ScoreTex = new TextComp(0, 0, "SCORE:0", 100, 0.5, 0.5, 0x00ffff, true);
    };
    GameManager.prototype.Update = function () {
        this.ScoreTex.SetText("SCORE:" + GameManager.Score.toFixed());
    };
    ;
    GameManager.prototype.OnDestroy = function () { };
    ;
    GameManager.prototype.Draw = function () { };
    ;
    GameManager.AddScore = function (AddValue) {
        GameManager.Score += AddValue;
    };
    GameManager.GetGameStatus = function () {
        return GameManager.NowStatus;
    };
    ;
    GameManager.SetGameStatus = function (Status) {
        GameManager.NowStatus += Status;
    };
    GameManager.prototype.EmitTarget = function () {
        if (GameManager.NowStatus == GameStatus.MainGame) {
            new TapTarget(MainGame.Width / 2, MainGame.Height);
        }
    };
    GameManager.NowStatus = GameStatus.MainGame;
    GameManager.Score = 0;
    return GameManager;
}(GameObject));
__reflect(GameManager.prototype, "GameManager");
//# sourceMappingURL=GameManager.js.map