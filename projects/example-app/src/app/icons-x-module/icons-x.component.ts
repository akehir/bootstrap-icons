import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconXCircleFill,
  bootstrapIconXCircle,
  bootstrapIconXDiamondFill,
  bootstrapIconXDiamond,
  bootstrapIconXOctagonFill,
  bootstrapIconXOctagon,
  bootstrapIconXSquareFill,
  bootstrapIconXSquare,
  bootstrapIconX,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-x',
  templateUrl: './icons-x.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsXComponent {
  icons = [
    bootstrapIconXCircleFill,
    bootstrapIconXCircle,
    bootstrapIconXDiamondFill,
    bootstrapIconXDiamond,
    bootstrapIconXOctagonFill,
    bootstrapIconXOctagon,
    bootstrapIconXSquareFill,
    bootstrapIconXSquare,
    bootstrapIconX,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
