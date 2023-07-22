import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'a', loadComponent: () => import('./icons-a/icons-a.component').then(m => m.IconsAComponent) },
  { path: 'b', loadComponent: () => import('./icons-b/icons-b.component').then(m => m.IconsBComponent) },
];
