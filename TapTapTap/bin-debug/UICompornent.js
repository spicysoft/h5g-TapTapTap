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
        _this.Display.setChildIndex(_this.TextF, -1);
        return _this;
    }
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
var WindowComp = (function (_super) {
    __extends(WindowComp, _super);
    function WindowComp(Title, Info, PosX, PosY) {
        var _this = _super.call(this) || this;
        _this.WindowImage = new ImageComp("resource/Window.png", PosX, PosY, 640, 520, 1, 1);
        _this.TitleText = new TextComp(PosX - 105, PosY - 215, Title, 100, 0.5, 0.5, 0xffffff, true);
        _this.InfoText = new TextComp(PosX - 210, PosY, Info, 100, 1, 1, 0xffffff, true);
        return _this;
    }
    WindowComp.prototype.SetPos = function (PosX, PosY) {
    };
    WindowComp.prototype.Update = function () { };
    ;
    WindowComp.prototype.OnDestroy = function () {
        this.WindowImage.OnDestroy();
        this.TitleText.OnDestroy();
        this.InfoText.OnDestroy();
    };
    ;
    WindowComp.prototype.Draw = function () { };
    ;
    return WindowComp;
}(UICompornent));
__reflect(WindowComp.prototype, "WindowComp");
//# sourceMappingURL=UICompornent.js.map