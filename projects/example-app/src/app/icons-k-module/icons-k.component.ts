import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconKanbanFill,
  bootstrapIconKanban,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-k',
  templateUrl: './icons-k.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsKComponent {
  icons = [
    bootstrapIconKanbanFill,
    bootstrapIconKanban,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
