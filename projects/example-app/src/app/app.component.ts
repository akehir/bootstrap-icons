import { Component, ViewEncapsulation } from '@angular/core';
import { usage, component, ngModule } from './code';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'Angular Bootstrap Lazy Loaded Icon Lib';
  step2 = ngModule;
  step3 = component;
  step4 = usage;

  constructor() {}
}
