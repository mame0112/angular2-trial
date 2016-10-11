import { Component, OnInit} from '@angular/core';

import { QuestionData } from '../data/question';

@Component ({
	selector: `main-pane`,
	template: `main`
})

export class MainPane implements OnInit{

	private questionData: QuestionData;

	ngOnInit(): void {
		this.questionData = new QuestionData(1, "description", "choice A is...", "choice B is...");
	}

}
