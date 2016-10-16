import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPane } from './directive/main-pane';
import { SubPane } from './directive/sub-pane';

import { QuestionDataService } from './service/questiondata-service';

@NgModule({

	// Import other modules into this own module
	imports:      [ BrowserModule ],

	//Registor irective and pipe. Original directives will be added here.
	declarations: [
	AppComponent,
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