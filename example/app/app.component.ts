import { Component } from '@angular/core';
import { CoreA } from '../../core/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	title = 'flow';
	coreA:CoreA;

	constructor() {
		this.coreA = new CoreA();
		this.coreA.testA();
	}
}
