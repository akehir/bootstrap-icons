import { Component, ViewEncapsulation, inject } from '@angular/core';
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
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsKComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [
    bootstrapIconKanbanFill,
    bootstrapIconKanban,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
