import { Component, ViewEncapsulation, inject } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconWallet,
  bootstrapIconWatch,
  bootstrapIconWifi,
  bootstrapIconWindow,
  bootstrapIconWrench,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-w',
  templateUrl: './icons-w.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsWComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [

    bootstrapIconWallet,
    bootstrapIconWatch,
    bootstrapIconWifi,
    bootstrapIconWindow,
    bootstrapIconWrench,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
