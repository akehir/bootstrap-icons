import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { BootstrapIconsRegistry } from "@triangular/bootstrap-icons";

import {
  bootstrapIconReplyAllFill,
  bootstrapIconReplyAll,
  bootstrapIconReplyFill,
  bootstrapIconReply,
} from "@triangular/bootstrap-icons/icons";

@Component({
  selector: "app-icons-r",
  templateUrl: "./icons-r.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false, // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsRComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [
    bootstrapIconReplyAllFill,
    bootstrapIconReplyAll,
    bootstrapIconReplyFill,
    bootstrapIconReply,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
