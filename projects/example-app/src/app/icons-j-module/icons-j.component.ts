import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconJustifyLeft,
  bootstrapIconJustifyRight,
  bootstrapIconJustify,
} from '@triangular/bootstrap-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-j',
  templateUrl: './icons-j.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsJComponent {
  icons = [
    bootstrapIconJustifyLeft,
    bootstrapIconJustifyRight,
    bootstrapIconJustify,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }
}
