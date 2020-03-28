import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsDComponent } from './icons-d.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

const routes: Routes = [
  { path: '', component: IconsDComponent }
];

@NgModule({
  declarations: [IconsDComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BootstrapIconsModule,
  ]
})
export class IconsDModule { }
