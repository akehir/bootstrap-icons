import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconViewList,
  bootstrapIconViewStacked,
  bootstrapIconVolumeDownFill,
  bootstrapIconVolumeDown,
  bootstrapIconVolumeMuteFill,
  bootstrapIconVolumeMute,
  bootstrapIconVolumeUpFill,
  bootstrapIconVolumeUp,
  bootstrapIconVr,
} from '@triangular/bootstrap-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-v',
  templateUrl: './icons-v.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsVComponent {
  icons = [

    bootstrapIconViewList,
    bootstrapIconViewStacked,
    bootstrapIconVolumeDownFill,
    bootstrapIconVolumeDown,
    bootstrapIconVolumeMuteFill,
    bootstrapIconVolumeMute,
    bootstrapIconVolumeUpFill,
    bootstrapIconVolumeUp,
    bootstrapIconVr,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
