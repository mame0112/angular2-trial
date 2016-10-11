"use strict";
var QuestionData = (function () {
    function QuestionData(questionIdData, descriptionData, choiceAData, choiceBData) {
        this.questionIdData = questionIdData;
        this.descriptionData = descriptionData;
        this.choiceAData = choiceAData;
        this.choiceBData = choiceBData;
        this.questionId = questionIdData;
        this.description = descriptionData;
        this.choiceA = choiceAData;
        this.choiceB = choiceBData;
    }
    QuestionData.prototype.getQuestionId = function () {
        return this.questionId;
    };
    QuestionData.prototype.getDescription = function () {
        return this.description;
    };
    QuestionData.prototype.getChoiceA = function () {
        return this.choiceA;
    };
    QuestionData.prototype.getChoiceB = function () {
        return this.choiceB;
    };
    return QuestionData;
}());
exports.QuestionData = QuestionData;
//# sourceMappingURL=question.js.map