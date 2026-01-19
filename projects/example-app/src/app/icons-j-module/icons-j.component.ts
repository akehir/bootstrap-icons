import { Component, ViewEncapsulation, inject } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconJustifyLeft,
  bootstrapIconJustifyRight,
  bootstrapIconJustify,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-j',
  templateUrl: './icons-j.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsJComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [
    bootstrapIconJustifyLeft,
    bootstrapIconJustifyRight,
    bootstrapIconJustify,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
