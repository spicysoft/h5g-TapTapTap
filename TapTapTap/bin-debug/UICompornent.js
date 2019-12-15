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
    UICompornent.prototype.SetIndexNum = function (Num) {
        UILayer.Display.setChildIndex(this.Display, Num);
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
    function TextComp(PosX, PosY, SetText, Size, ScaleX, ScaleY, Color, Bold, Center) {
        var _this = _super.call(this) || this;
        _this.OutputText = "";
        _this.TextF = null;
        _this.TextF = new egret.TextField();
        _this.TextF.text = SetText;
        _this.TextF.bold = Bold;
        _this.TextF.size = Size;
        _this.TextF.scaleX = ScaleX;
        _this.TextF.scaleY = ScaleY;
        _this.TextF.textColor = Color;
        _this.TextF.x = Center ? (PosX) - _this.TextF.width * 0.5 : PosX;
        _this.TextF.y = Center ? (PosY) - _this.TextF.height * 0.5 : PosY;
        _this.Display.addChild(_this.TextF);
        UILayer.Display.setChildIndex(_this.Display, -1);
        return _this;
    }
    TextComp.prototype.GetPosX = function () {
        return this.TextF.x;
    };
    TextComp.prototype.GetPosY = function () {
        return this.TextF.y;
    };
    TextComp.prototype.SetPos = function (XPos, YPos) {
        this.TextF.x = XPos;
        this.TextF.y = YPos;
    };
    TextComp.prototype.AddPos = function (XPos, YPos) {
        this.TextF.x += XPos;
        this.TextF.y += YPos;
    };
    TextComp.prototype.SetText = function (SetText) {
        this.TextF.text = SetText;
    };
    TextComp.prototype.Update = function () { };
    ;
    TextComp.prototype.OnDestroy = function () {
        this.Display.removeChild(this.TextF);
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
var ImageComp = (function (_super) {
    __extends(ImageComp, _super);
    function ImageComp(ImagePath, PosX, PosY, Width, Height, ScaleX, ScaleY) {
        var _this = _super.call(this) || this;
        var LoadImage = new eui.Image();
        LoadImage.source = ImagePath;
        _this.Image = LoadImage;
        _this.Image.scaleX = ScaleX;
        _this.Image.scaleY = ScaleY;
        _this.Height = Height;
        _this.Width = Width;
        //  this.Image.horizontalCenter=-(this.Width*ScaleX)/2;
        //  this.Image.verticalCenter=-(this.Height*ScaleY)/2
        _this.Image.x = PosX - (_this.Width * _this.Image.scaleX / 2);
        ;
        _this.Image.y = PosY - (_this.Height * _this.Image.scaleY / 2);
        ;
        _this.Display.addChild(_this.Image);
        _this.Display.setChildIndex(_this.Image, 4);
        return _this;
    }
    ImageComp.prototype.SetPos = function (PosX, PosY) {
        this.Image.x = PosX - (this.Width * this.Image.scaleX / 2);
        this.Image.y = PosY - (this.Height * this.Image.scaleY / 2);
    };
    ImageComp.prototype.Update = function () { };
    ;
    ImageComp.prototype.OnDestroy = function () {
        this.Display.removeChild(this.Image);
        this.Image = null;
    };
    ;
    ImageComp.prototype.Draw = function () { };
    ;
    return ImageComp;
}(UICompornent));
__reflect(ImageComp.prototype, "ImageComp");
var TitleWindowComp = (function (_super) {
    __extends(TitleWindowComp, _super);
    function TitleWindowComp(PosX, PosY) {
        var _this = _super.call(this) || this;
        _this.InfoText = [];
        _this.TitleRect = new Rect(0, PosY - 100, 1280, 100);
        _this.TitleRect.SetColor(0x621122);
        _this.TitleRect.SetAlpha(1);
        _this.TitleText = new TextComp(PosX, PosY - 50, "タピオカタップ", 80, 1, 1, 0xffffff, true, true);
        _this.InfoRect = new Rect(0, PosY, 1280, 250);
        _this.InfoRect.SetColor(0xd8574a);
        _this.InfoRect.SetAlpha(1);
        _this.InfoText[0] = new TextComp(PosX, PosY + 40, "黒タピオカをタップ！", 50, 1, 1, 0xffffff, true, true);
        _this.InfoText[1] = new TextComp(PosX, PosY + 90, "画面上の赤いエリアに", 50, 1, 1, 0xffffff, true, true);
        _this.InfoText[2] = new TextComp(PosX, PosY + 140, "黒タピオカが入ると終了！", 50, 1, 1, 0xffffff, true, true);
        _this.InfoText[3] = new TextComp(PosX, PosY + 190, "赤のタピオカは潰さないで！", 50, 1, 1, 0xffffff, true, true);
        _this.InfoRect.SetIndexNum(5);
        _this.TitleRect.SetIndexNum(5);
        _this.TitleText.SetIndexNum(-1);
        for (var i = 0; i < 4; i++) {
            _this.InfoText[i].SetIndexNum(-1);
        }
        return _this;
    }
    TitleWindowComp.prototype.SetPos = function (PosX, PosY) {
    };
    TitleWindowComp.prototype.Update = function () { };
    ;
    TitleWindowComp.prototype.OnDestroy = function () {
        this.TitleText.OnDestroy();
        this.TitleRect.Destroy();
        for (var i = 0; i < 4; i++) {
            this.InfoText[i].OnDestroy();
        }
        this.InfoRect.Destroy();
    };
    ;
    TitleWindowComp.prototype.Draw = function () { };
    ;
    return TitleWindowComp;
}(UICompornent));
__reflect(TitleWindowComp.prototype, "TitleWindowComp");
var WindowComp = (function (_super) {
    __extends(WindowComp, _super);
    function WindowComp(Title, Info, PosX, PosY) {
        var _this = _super.call(this) || this;
        _this.TitleRect = new Rect(0, PosY - 100, 1280, 100);
        _this.TitleRect.SetColor(0x621122);
        _this.TitleRect.SetAlpha(1);
        _this.TitleText = new TextComp(PosX, PosY - 50, Title, 80, 1, 1, 0xffffff, true, true);
        _this.InfoRect = new Rect(0, PosY, 1280, 150);
        _this.InfoRect.SetColor(0xd8574a);
        _this.InfoRect.SetAlpha(1);
        _this.InfoText = new TextComp(PosX, PosY + 70, Info, 100, 1, 1, 0xffffff, true, true);
        _this.InfoRect.SetIndexNum(5);
        _this.TitleRect.SetIndexNum(5);
        _this.InfoText.SetIndexNum(-1);
        _this.TitleText.SetIndexNum(-1);
        return _this;
    }
    WindowComp.prototype.SetPos = function (PosX, PosY) {
    };
    WindowComp.prototype.Update = function () { };
    ;
    WindowComp.prototype.OnDestroy = function () {
        this.TitleText.OnDestroy();
        this.TitleRect.Destroy();
        this.InfoText.OnDestroy();
        this.InfoRect.Destroy();
    };
    ;
    WindowComp.prototype.Draw = function () { };
    ;
    return WindowComp;
}(UICompornent));
__reflect(WindowComp.prototype, "WindowComp");
//# sourceMappingURL=UICompornent.js.map