import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { BootstrapIconsRegistry } from "@triangular/bootstrap-icons";

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
} from "@triangular/bootstrap-icons/icons";

@Component({
  selector: "app-icons-h",
  templateUrl: "./icons-h.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false, // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsHComponent {
  private registry = inject(BootstrapIconsRegistry);

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

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
