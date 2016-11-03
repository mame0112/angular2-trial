import { Component, Injectable } from '@angular/core';

import { QuestionData } from '../data/question';
import { QUESTIONS } from '../mock/mock-question';

@Injectable()
export class QuestionDataService {
	getQuestions(): Promise<QuestionData[]> {
		return new Promise(function(resolve){
			return resolve(QUESTIONS);
		})
		// return new Promise(function(resolve){
		// 	return Promise.resolve(QUESTIONS);
		// });
		// return Promise.resolve(QUESTIONS);
	}

	getQuestion(questionId: number): Promise<QuestionData>{
		return this.getQuestions().then(questions => questions.find(question => question.questionId === questionId));
	}
}
