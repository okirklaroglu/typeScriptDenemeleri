var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RobotsFactory = /** @class */ (function () {
    function RobotsFactory() {
    }
    return RobotsFactory;
}());
var Robot = /** @class */ (function (_super) {
    __extends(Robot, _super);
    function Robot(fabricX, fabricY, fabricZ, robotW) {
        var _this = _super.call(this) || this;
        _this._fabricX = fabricX;
        _this._fabricY = fabricY;
        _this._fabricZ = fabricZ;
        _this.robotWeight = robotW;
        return _this;
    }
    Robot.prototype.robotSpecs = function () {
        console.log("Merhaba ben " + this.robotName + ", \n                    \nSeri Numaram " + this.robotSerialNumber + ", \n                    \nBoyutlar\u0131m " + this._fabricX + "cm / " + this._fabricY + "cm / " + this._fabricZ + " ve a\u011F\u0131rl\u0131\u011F\u0131m " + this.robotWeight + " KG");
    };
    return Robot;
}(RobotsFactory));
//Burası Kopya oldu!!!... (daha kolayı varsa bilmek isterim...)
function getRandomString(length) {
    var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
var robotOne = new Robot(150, 30, 40, 50);
robotOne.robotName = getRandomString(4);
robotOne.robotSerialNumber = Math.floor(Math.random() * 1000000000 + 1);
robotOne.robotSpecs();
