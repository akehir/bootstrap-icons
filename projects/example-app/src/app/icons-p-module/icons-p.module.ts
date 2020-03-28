import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsPComponent } from './icons-p.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

const routes: Routes = [
  { path: '', component: IconsPComponent }
];

@NgModule({
  declarations: [IconsPComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BootstrapIconsModule,
  ]
})
export class IconsPModule { }
