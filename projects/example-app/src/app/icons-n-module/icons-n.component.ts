import { Component, ViewEncapsulation, inject } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconNewspaper,

} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-n',
  templateUrl: './icons-n.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsNComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [
    bootstrapIconNewspaper,

  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
