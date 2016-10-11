"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var QUESTIONS = [
    { questionId: 1, description: 'Test Desc 1', choiceA: 'Test choice A1', choiceB: 'Test choice B1' },
    { questionId: 1, description: 'Test Desc 2', choiceA: 'Test choice A2', choiceB: 'Test choice B2' },
    { questionId: 1, description: 'Test Desc 3', choiceA: 'Test choice A3', choiceB: 'Test choice B3' },
    { questionId: 1, description: 'Test Desc 4', choiceA: 'Test choice A4', choiceB: 'Test choice B4' },
    { questionId: 1, description: 'Test Desc 5', choiceA: 'Test choice A5', choiceB: 'Test choice B5' },
    { questionId: 1, description: 'Test Desc 6', choiceA: 'Test choice A6', choiceB: 'Test choice B6' },
    { questionId: 1, description: 'Test Desc 7', choiceA: 'Test choice A7', choiceB: 'Test choice 67' },
    { questionId: 1, description: 'Test Desc 8', choiceA: 'Test choice A8', choiceB: 'Test choice B8' },
    { questionId: 1, description: 'Test Desc 9', choiceA: 'Test choice A9', choiceB: 'Test choice B9' },
    { questionId: 1, description: 'Test Desc 10', choiceA: 'Test choice A10', choiceB: 'Test choice B10' },
];
var MainPane = (function () {
    function MainPane() {
        this.questions = QUESTIONS;
    }
    MainPane.prototype.ngOnInit = function () {
        // this.questionData = new QuestionData(1, "description", "choice A is...", "choice B is...");
    };
    MainPane = __decorate([
        core_1.Component({
            selector: "main-pane",
            template: "\n\t<ul>\n\t\t<li *ngFor=\"let question  of questions\">\n\t\t\t<p>{{question.description}}</p>\n\t\t</li>\n\t<ul>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], MainPane);
    return MainPane;
}());
exports.MainPane = MainPane;
//# sourceMappingURL=main-pane.js.map