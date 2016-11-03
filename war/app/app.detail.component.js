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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var questiondata_service_1 = require('./service/questiondata-service');
var question_1 = require('./data/question');
var DetailComponent = (function () {
    function DetailComponent(route, qeustionDataService, location) {
        this.route = route;
        this.qeustionDataService = qeustionDataService;
        this.location = location;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("aa");
        // function suc(question){
        // 	question => this.question = question
        // }
        this.route.params.forEach(function (params) {
            var questionId = +params['questionId'];
            _this.qeustionDataService.getQuestion(questionId).then(function (question) { return _this.question = question; });
        });
    };
    DetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', question_1.QuestionData)
    ], DetailComponent.prototype, "question", void 0);
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sub-pane',
            templateUrl: 'question.detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, questiondata_service_1.QuestionDataService, common_1.Location])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=app.detail.component.js.map