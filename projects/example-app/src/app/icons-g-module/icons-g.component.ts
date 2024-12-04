import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconGearFill,
  bootstrapIconGearWideConnected,
  bootstrapIconGearWide,
  bootstrapIconGear,
  bootstrapIconGem,
  bootstrapIconGeoAlt,
  bootstrapIconGeo,
  bootstrapIconGiftFill,
  bootstrapIconGift,
  bootstrapIconGraphDown,
  bootstrapIconGraphUp,
  bootstrapIconGrid1X2Fill,
  bootstrapIconGrid1X2,
  bootstrapIconGrid3X2GapFill,
  bootstrapIconGrid3X2Gap,
  bootstrapIconGrid3X2,
  bootstrapIconGrid3X3GapFill,
  bootstrapIconGrid3X3Gap,
  bootstrapIconGrid3X3,
  bootstrapIconGridFill,
  bootstrapIconGrid,
} from '@triangular/bootstrap-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-g',
  templateUrl: './icons-g.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsGComponent {
  icons = [

    bootstrapIconGearFill,
    bootstrapIconGearWideConnected,
    bootstrapIconGearWide,
    bootstrapIconGear,
    bootstrapIconGem,
    bootstrapIconGeoAlt,
    bootstrapIconGeo,
    bootstrapIconGiftFill,
    bootstrapIconGift,
    bootstrapIconGraphDown,
    bootstrapIconGraphUp,
    bootstrapIconGrid1X2Fill,
    bootstrapIconGrid1X2,
    bootstrapIconGrid3X2GapFill,
    bootstrapIconGrid3X2Gap,
    bootstrapIconGrid3X2,
    bootstrapIconGrid3X3GapFill,
    bootstrapIconGrid3X3Gap,
    bootstrapIconGrid3X3,
    bootstrapIconGridFill,
    bootstrapIconGrid,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
