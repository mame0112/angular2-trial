import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { QuestionDataService } from './service/questiondata-service';

import { QuestionData } from './data/question';

@Component ({
	moduleId: module.id,
	selector: 'sub-pane',
	templateUrl: 'question.detail.component.html'
	// templateUrl: `question.detail.component.html`,
	// providers: [QuestionDataService]
	// templateUrl: `question-detail.component.html`
})

export class DetailComponent implements OnInit{

	constructor(
		private route: ActivatedRoute,
		private qeustionDataService: QuestionDataService
		){}
	@Input()
	question : QuestionData;

	ngOnInit(): void {
		console.log("aa");

		// function suc(question){
		// 	question => this.question = question
		// }

		this.route.params.forEach((params : Params) => {
			let questionId = +params['questionId'];
			this.qeustionDataService.getQuestion(questionId).then(question => this.question = question);
		});
	}
}