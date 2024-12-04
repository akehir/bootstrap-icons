import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconUnion,
  bootstrapIconUnlockFill,
  bootstrapIconUnlock,
  bootstrapIconUpload,
} from '@triangular/bootstrap-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-u',
  templateUrl: './icons-u.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsUComponent {
  icons = [

    bootstrapIconUnion,
    bootstrapIconUnlockFill,
    bootstrapIconUnlock,
    bootstrapIconUpload,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
