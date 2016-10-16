import { Component, OnInit} from '@angular/core';

import { QuestionData } from '../data/question';
import { QUESTIONS } from '../mock/mock-question';

import { QuestionDataService } from '../service/questiondata-service';

@Component ({
	selector: `main-pane`,
	template: `
	<ul>
		<li *ngFor="let question  of questions">
			<p>{{question.description}}</p>
		</li>
	<ul>
	`
})

export class MainPane implements OnInit{

	private questionData: QuestionData;

	questions: QuestionData[];



	// define private questionDataService at the same time.
	constructor(private questionDataService: QuestionDataService){}

	ngOnInit(): void {
		this.questions = this.questionDataService.getQuestions();
	}

}
