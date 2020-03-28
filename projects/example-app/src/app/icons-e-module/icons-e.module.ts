import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsEComponent } from './icons-e.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

const routes: Routes = [
  { path: '', component: IconsEComponent }
];

@NgModule({
  declarations: [IconsEComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BootstrapIconsModule,
  ]
})
export class IconsEModule { }
