import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconHammer,
  bootstrapIconHash,
  bootstrapIconHeartFill,
  bootstrapIconHeartHalf,
  bootstrapIconHeart,
  bootstrapIconHouseDoorFill,
  bootstrapIconHouseDoor,
  bootstrapIconHouseFill,
  bootstrapIconHouse,
  bootstrapIconHr,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-h',
  templateUrl: './icons-h.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsHComponent {
  icons = [
    bootstrapIconHammer,
    bootstrapIconHash,
    bootstrapIconHeartFill,
    bootstrapIconHeartHalf,
    bootstrapIconHeart,
    bootstrapIconHouseDoorFill,
    bootstrapIconHouseDoor,
    bootstrapIconHouseFill,
    bootstrapIconHouse,
    bootstrapIconHr,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
