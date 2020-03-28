import { Component, ViewEncapsulation } from '@angular/core';
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
})
export class IconsOComponent {
  icons = [
    bootstrapIconOctagonFill,
    bootstrapIconOctagonHalf,
    bootstrapIconOctagon,
    bootstrapIconOption,
    bootstrapIconOutlet,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
