import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { QuestionData } from '../data/question';
import { QUESTIONS } from '../mock/mock-question';

import { QuestionDataService } from '../service/questiondata-service';

@Component ({
	moduleId: module.id,
	selector: `main-pane`,
	templateUrl: `dashboard.component.html`,
	providers: [QuestionDataService]
})

export class MainPane implements OnInit{

	private questionData: QuestionData;

	questions: QuestionData[];



	// define private questionDataService at the same time.
	constructor(
		private router: Router,
		private questionDataService: QuestionDataService
	){}

	ngOnInit(): void {

		// Get data with sync()
		this.getQuestionDataList();
	}

	getQuestionDataList(): void {
		this.questionDataService.getQuestions().then(questions => this.questions = questions);
	}

	showDetail(question : QuestionData): void{
		let link= ['/detail', question.questionId];
		this.router.navigate(link);
	}

}
