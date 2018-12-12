var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw "Supply an engine!";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var brum = new Car("V8");
console.log(brum.engine);
brum.engine = "V6";
console.log(brum.engine);
