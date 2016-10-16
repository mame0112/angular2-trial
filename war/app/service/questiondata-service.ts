import { Component, Injectable } from '@angular/core';

import { QuestionData } from '../data/question';
import { QUESTIONS } from '../mock/mock-question';

@Injectable()
export class QuestionDataService {
	getQuestions(): Promise<QuestionData[]> {
		return Promise.resolve(QUESTIONS);
	}
}
