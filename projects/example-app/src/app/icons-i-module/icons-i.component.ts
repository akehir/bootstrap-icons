import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconImageAlt,
  bootstrapIconImageFill,
  bootstrapIconImage,
  bootstrapIconImages,
  bootstrapIconInboxFill,
  bootstrapIconInbox,
  bootstrapIconInboxesFill,
  bootstrapIconInboxes,
  bootstrapIconInfoCircleFill,
  bootstrapIconInfoCircle,
  bootstrapIconInfoSquareFill,
  bootstrapIconInfoSquare,
  bootstrapIconInfo,
  bootstrapIconIntersect,
} from '@triangular/bootstrap-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-i',
  templateUrl: './icons-i.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsIComponent {
  icons = [
    bootstrapIconImageAlt,
    bootstrapIconImageFill,
    bootstrapIconImage,
    bootstrapIconImages,
    bootstrapIconInboxFill,
    bootstrapIconInbox,
    bootstrapIconInboxesFill,
    bootstrapIconInboxes,
    bootstrapIconInfoCircleFill,
    bootstrapIconInfoCircle,
    bootstrapIconInfoSquareFill,
    bootstrapIconInfoSquare,
    bootstrapIconInfo,
    bootstrapIconIntersect,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
