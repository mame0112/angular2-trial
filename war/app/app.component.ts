import { Component } from '@angular/core';

import { MainPane } from './directive/main-pane';
import { SubPane } from './directive/sub-pane';

@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
  <main-pane></main-pane>
  <sub-pane></sub-pane>
  `

})

export class AppComponent {

}