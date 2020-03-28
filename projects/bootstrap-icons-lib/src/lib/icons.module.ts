import { ModuleWithProviders, NgModule } from '@angular/core';
import { BootstrapIconComponent } from './icon.component';
import { BootstrapIconsRegistry } from './icons.registry';

@NgModule({
  declarations: [BootstrapIconComponent],
  imports: [],
  exports: [BootstrapIconComponent]
})
export class BootstrapIconsModule {
  static forRoot(): ModuleWithProviders<BootstrapIconsModule> {
    return {
      ngModule: BootstrapIconsModule,
      providers: [
        BootstrapIconsRegistry,
      ],
    };
  }
}
