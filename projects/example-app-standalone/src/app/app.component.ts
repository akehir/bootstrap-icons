import { Component, ChangeDetectionStrategy } from "@angular/core";

import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "example-app-standalone";
}
