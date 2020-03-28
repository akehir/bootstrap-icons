import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsZComponent } from './icons-z.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

const routes: Routes = [
  { path: '', component: IconsZComponent }
];

@NgModule({
  declarations: [IconsZComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BootstrapIconsModule,
  ]
})
export class IconsZModule { }
