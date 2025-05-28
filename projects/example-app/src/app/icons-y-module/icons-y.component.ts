import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-y',
  templateUrl: './icons-y.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsYComponent {
  icons = [
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
