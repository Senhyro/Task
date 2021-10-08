"use strict";
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.hourDifference = function (date1, date2) {
        var timeStart = date1.getHours();
        var timeEnd = date2.getHours();
        var hourDifference = timeEnd - timeStart;
        return hourDifference;
    };
    return Utils;
}());
