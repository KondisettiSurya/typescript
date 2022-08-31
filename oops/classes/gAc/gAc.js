var Mobile = /** @class */ (function () {
    function Mobile(mobilename, color, price) {
        this.mobilename = mobilename;
        this.color = color;
        this.price = price;
    }
    // Getters and setters to access the above private properties
    Mobile.prototype.getmobilename = function () {
        return this.mobilename;
    };
    return Mobile;
}());
var mobile = new Mobile('iphone', 'red', 1200);
//    console.log(mobile);
console.log(mobile.getmobilename);
