import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: 'a', loadChildren: () => import('./icons-a-module/icons-a.module').then(m => m.IconsAModule) },
  { path: 'b', loadChildren: () => import('./icons-b-module/icons-b.module').then(m => m.IconsBModule) },
  { path: 'c', loadChildren: () => import('./icons-c-module/icons-c.module').then(m => m.IconsCModule) },
  { path: 'd', loadChildren: () => import('./icons-d-module/icons-d.module').then(m => m.IconsDModule) },
  { path: 'e', loadChildren: () => import('./icons-e-module/icons-e.module').then(m => m.IconsEModule) },
  { path: 'f', loadChildren: () => import('./icons-f-module/icons-f.module').then(m => m.IconsFModule) },
  { path: 'g', loadChildren: () => import('./icons-g-module/icons-g.module').then(m => m.IconsGModule) },
  { path: 'h', loadChildren: () => import('./icons-h-module/icons-h.module').then(m => m.IconsHModule) },
  { path: 'i', loadChildren: () => import('./icons-i-module/icons-i.module').then(m => m.IconsIModule) },
  { path: 'j', loadChildren: () => import('./icons-j-module/icons-j.module').then(m => m.IconsJModule) },
  { path: 'k', loadChildren: () => import('./icons-k-module/icons-k.module').then(m => m.IconsKModule) },
  { path: 'l', loadChildren: () => import('./icons-l-module/icons-l.module').then(m => m.IconsLModule) },
  { path: 'm', loadChildren: () => import('./icons-m-module/icons-m.module').then(m => m.IconsMModule) },
  { path: 'n', loadChildren: () => import('./icons-n-module/icons-n.module').then(m => m.IconsNModule) },
  { path: 'o', loadChildren: () => import('./icons-o-module/icons-o.module').then(m => m.IconsOModule) },
  { path: 'p', loadChildren: () => import('./icons-p-module/icons-p.module').then(m => m.IconsPModule) },
  { path: 'q', loadChildren: () => import('./icons-q-module/icons-q.module').then(m => m.IconsQModule) },
  { path: 'r', loadChildren: () => import('./icons-r-module/icons-r.module').then(m => m.IconsRModule) },
  { path: 's', loadChildren: () => import('./icons-s-module/icons-s.module').then(m => m.IconsSModule) },
  { path: 't', loadChildren: () => import('./icons-t-module/icons-t.module').then(m => m.IconsTModule) },
  { path: 'u', loadChildren: () => import('./icons-u-module/icons-u.module').then(m => m.IconsUModule) },
  { path: 'v', loadChildren: () => import('./icons-v-module/icons-v.module').then(m => m.IconsVModule) },
  { path: 'w', loadChildren: () => import('./icons-w-module/icons-w.module').then(m => m.IconsWModule) },
  { path: 'x', loadChildren: () => import('./icons-x-module/icons-x.module').then(m => m.IconsDModule) },
  { path: 'y', loadChildren: () => import('./icons-y-module/icons-y.module').then(m => m.IconsYModule) },
  { path: 'z', loadChildren: () => import('./icons-z-module/icons-z.module').then(m => m.IconsZModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
    ReactiveFormsModule,
    BootstrapIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
