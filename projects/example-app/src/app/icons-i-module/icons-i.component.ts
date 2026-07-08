import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { BootstrapIconsRegistry } from "@triangular/bootstrap-icons";

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
} from "@triangular/bootstrap-icons/icons";

@Component({
  selector: "app-icons-i",
  templateUrl: "./icons-i.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false, // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsIComponent {
  private registry = inject(BootstrapIconsRegistry);

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

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
