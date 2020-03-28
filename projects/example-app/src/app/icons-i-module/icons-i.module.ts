import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsIComponent } from './icons-i.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

const routes: Routes = [
  { path: '', component: IconsIComponent }
];

@NgModule({
  declarations: [IconsIComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BootstrapIconsModule,
  ]
})
export class IconsIModule { }
