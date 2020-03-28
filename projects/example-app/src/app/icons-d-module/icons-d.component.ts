import { Component, ViewEncapsulation } from '@angular/core';
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
})
export class IconsDComponent {
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

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
