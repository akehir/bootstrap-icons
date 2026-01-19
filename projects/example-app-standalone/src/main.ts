import { provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {routes} from "./app/app.routes";
import {provideRouter} from "@angular/router";

bootstrapApplication(AppComponent, {providers: [provideZonelessChangeDetection(), provideRouter(routes)]})
  .catch((err) => console.error(err));
