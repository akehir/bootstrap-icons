import { Component, ViewEncapsulation, inject } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconUnion,
  bootstrapIconUnlockFill,
  bootstrapIconUnlock,
  bootstrapIconUpload,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-u',
  templateUrl: './icons-u.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsUComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [

    bootstrapIconUnion,
    bootstrapIconUnlockFill,
    bootstrapIconUnlock,
    bootstrapIconUpload,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
