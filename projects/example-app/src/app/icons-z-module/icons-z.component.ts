import {
  Component,
  ViewEncapsulation,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { BootstrapIconsRegistry } from "@triangular/bootstrap-icons";

@Component({
  selector: "app-icons-z",
  templateUrl: "./icons-z.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false, // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsZComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }
}
