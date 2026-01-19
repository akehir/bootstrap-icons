import { Component, ViewEncapsulation, inject } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconDashCircleFill,
  bootstrapIconDashCircle,
  bootstrapIconDashSquareFill,
  bootstrapIconDashSquare,
  bootstrapIconDash,
  bootstrapIconDiamondFill,
  bootstrapIconDiamondHalf,
  bootstrapIconDiamond,
  bootstrapIconDisplayFill,
  bootstrapIconDisplay,
  bootstrapIconDot,
  bootstrapIconDownload,
  bootstrapIconDropletFill,
  bootstrapIconDropletHalf,
  bootstrapIconDroplet,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-d',
  templateUrl: './icons-d.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsDComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [
    bootstrapIconDashCircleFill,
    bootstrapIconDashCircle,
    bootstrapIconDashSquareFill,
    bootstrapIconDashSquare,
    bootstrapIconDash,
    bootstrapIconDiamondFill,
    bootstrapIconDiamondHalf,
    bootstrapIconDiamond,
    bootstrapIconDisplayFill,
    bootstrapIconDisplay,
    bootstrapIconDot,
    bootstrapIconDownload,
    bootstrapIconDropletFill,
    bootstrapIconDropletHalf,
    bootstrapIconDroplet,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
