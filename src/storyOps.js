'use strict';

function Story(text) {
    this.text = text;
}
Story.prototype.addPath = function (story, option) {
    switch (option) {
        case "A": this.PathA = story; break;
        case "B": this.PathB = story; break;
        case "C": this.PathC = story; break;
        case "D": this.PathD = story; break;
    }
}

Story.prototype.getPath = function (option) {
    switch (option) {
        case "A": return this.PathA;
        case "B": return this.PathB;
        case "C": return this.PathC;
        case "D": return this.PathD;
    }
}
module.exports = Story;