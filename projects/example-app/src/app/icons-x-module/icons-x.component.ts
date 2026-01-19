import { Component, ViewEncapsulation, inject } from '@angular/core';
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
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsXComponent {
  private registry = inject(BootstrapIconsRegistry);

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

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
