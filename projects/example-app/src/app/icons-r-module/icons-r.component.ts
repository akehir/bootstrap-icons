import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconReplyAllFill,
  bootstrapIconReplyAll,
  bootstrapIconReplyFill,
  bootstrapIconReply,
} from '@triangular/bootstrap-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-r',
  templateUrl: './icons-r.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsRComponent {
  icons = [
    bootstrapIconReplyAllFill,
    bootstrapIconReplyAll,
    bootstrapIconReplyFill,
    bootstrapIconReply,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
