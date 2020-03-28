import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-z',
  templateUrl: './icons-z.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsZComponent {
  icons = [

  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
