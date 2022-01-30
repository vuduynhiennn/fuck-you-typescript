var yourName = "Nguyen Van A";
console.log(yourName);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.great = function () {
        console.log("we are learning typescript");
    };
    return Person;
}());
var obj = new Person();
console.log(obj.great());
