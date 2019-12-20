var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Utility = (function () {
    function Utility() {
    }
    Utility.GetRandomInt = function (Min, Max) {
        return Math.floor(Min + Math.random() * (Max + 0.999 - Min));
    };
    Utility.GetRandom = function (Min, Max) {
        return Min + Math.random() * (Max - Min);
    };
    return Utility;
}());
__reflect(Utility.prototype, "Utility");
//# sourceMappingURL=Utility.js.map