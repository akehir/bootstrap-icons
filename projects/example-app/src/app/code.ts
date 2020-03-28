export const ngModule = `import { NgModule } from '@angular/core';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

@NgModule({
    declarations: [
    ],
    imports: [
      BootstrapIconsModule,
    ],
    providers: [],
    bootstrap: [],
})
export class AppModule { }
`;

export const component = `import { Component } from '@angular/core';
import { BootstrapIconsRegistry } from '@triangular/bootstrap-icons';
import {
  bootstrapIconAlarm,
  // add more icons here
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-some-component-with-icons',
  template: '<bootstrap-icon name="alarm"></bootstrap-icon>',
  styles: 'svg { color: #ccc; fill: currentColor; width: 5rem; height: 5rem; }',
})
export class SomeComponentWithIcons {

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons([
      bootstrapIconAlarm,
      // add more icons here
    ]);
  }
}`;

export const usage = `<bootstrap-icon name="alarm"></bootstrap-icon>`;
