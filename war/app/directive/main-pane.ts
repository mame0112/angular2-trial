import { Component, OnInit} from '@angular/core';

import { QuestionData } from '../data/question';

import { QUESTIONS } from '../mock/mock-question';

// const QUESTIONS: QuestionData[] = [
// 	{questionId: 1, description: 'Test Desc 1', choiceA: 'Test choice A1', choiceB: 'Test choice B1'},
// 	{questionId: 1, description: 'Test Desc 2', choiceA: 'Test choice A2', choiceB: 'Test choice B2'},
// 	{questionId: 1, description: 'Test Desc 3', choiceA: 'Test choice A3', choiceB: 'Test choice B3'},
// 	{questionId: 1, description: 'Test Desc 4', choiceA: 'Test choice A4', choiceB: 'Test choice B4'},
// 	{questionId: 1, description: 'Test Desc 5', choiceA: 'Test choice A5', choiceB: 'Test choice B5'},
// 	{questionId: 1, description: 'Test Desc 6', choiceA: 'Test choice A6', choiceB: 'Test choice B6'},
// 	{questionId: 1, description: 'Test Desc 7', choiceA: 'Test choice A7', choiceB: 'Test choice 67'},
// 	{questionId: 1, description: 'Test Desc 8', choiceA: 'Test choice A8', choiceB: 'Test choice B8'},
// 	{questionId: 1, description: 'Test Desc 9', choiceA: 'Test choice A9', choiceB: 'Test choice B9'},
// 	{questionId: 1, description: 'Test Desc 10', choiceA: 'Test choice A10', choiceB: 'Test choice B10'},
// ];

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

	questions = QUESTIONS;


	ngOnInit(): void {
		// this.questionData = new QuestionData(1, "description", "choice A is...", "choice B is...");
	}

}
