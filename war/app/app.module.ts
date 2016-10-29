import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './app.dashboard.component';

import { MainPane } from './directive/main-pane';
import { SubPane } from './directive/sub-pane';

import { QuestionDataService } from './service/questiondata-service';

@NgModule({

	// Import other modules into this own module
	imports:      [ BrowserModule,
		RouterModule.forRoot([
			{
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full'
			},
			{
			  path: 'dashboard',
			  component: DashboardComponent
			},
			{
				path: 'overview',
				component: MainPane
			},
			{
				path: 'detail',
				component: SubPane
			}

		])
	 ],

	//Registor irective and pipe. Original directives will be added here.
	declarations: [
		AppComponent,
		DashboardComponent,
		MainPane,
		SubPane
	],

	providers: [
		QuestionDataService
	],

	//Define application entry point component.
	bootstrap: [ AppComponent ]

})

export class AppModule { }