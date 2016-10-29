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
var questiondata_service_1 = require('../service/questiondata-service');
var MainPane = (function () {
    // define private questionDataService at the same time.
    function MainPane(questionDataService) {
        this.questionDataService = questionDataService;
    }
    MainPane.prototype.ngOnInit = function () {
        // Get data with sync()
        this.getQuestionDataList();
    };
    MainPane.prototype.getQuestionDataList = function () {
        var _this = this;
        this.questionDataService.getQuestions().then(function (questions) { return _this.questions = questions; });
    };
    MainPane = __decorate([
        core_1.Component({
            selector: "main-pane",
            template: "\n\t\t<ul>\n\t\t\t<li *ngFor=\"let question  of questions\">\n\t\t\t\t<p>{{question.description}}</p>\n\t\t\t</li>\n\t\t<ul>\n\t",
            providers: [questiondata_service_1.QuestionDataService]
        }), 
        __metadata('design:paramtypes', [questiondata_service_1.QuestionDataService])
    ], MainPane);
    return MainPane;
}());
exports.MainPane = MainPane;
//# sourceMappingURL=main-pane.js.map