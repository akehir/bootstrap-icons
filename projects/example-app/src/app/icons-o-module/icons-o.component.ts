import { Component, ViewEncapsulation, inject } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconOctagonFill,
  bootstrapIconOctagonHalf,
  bootstrapIconOctagon,
  bootstrapIconOption,
  bootstrapIconOutlet,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-o',
  templateUrl: './icons-o.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsOComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [
    bootstrapIconOctagonFill,
    bootstrapIconOctagonHalf,
    bootstrapIconOctagon,
    bootstrapIconOption,
    bootstrapIconOutlet,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
