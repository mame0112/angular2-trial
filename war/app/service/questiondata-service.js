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
var mock_question_1 = require('../mock/mock-question');
var QuestionDataService = (function () {
    function QuestionDataService() {
    }
    QuestionDataService.prototype.getQuestions = function () {
        return new Promise(function (resolve) {
            return resolve(mock_question_1.QUESTIONS);
        });
        // return new Promise(function(resolve){
        // 	return Promise.resolve(QUESTIONS);
        // });
        // return Promise.resolve(QUESTIONS);
    };
    QuestionDataService.prototype.getQuestion = function (questionId) {
        return this.getQuestions().then(function (questions) { return questions.find(function (question) { return question.questionId === questionId; }); });
    };
    QuestionDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QuestionDataService);
    return QuestionDataService;
}());
exports.QuestionDataService = QuestionDataService;
//# sourceMappingURL=questiondata-service.js.map