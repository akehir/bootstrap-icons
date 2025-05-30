import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconMap,
  bootstrapIconMicFill,
  bootstrapIconMicMuteFill,
  bootstrapIconMicMute,
  bootstrapIconMic,
  bootstrapIconMoon,
  bootstrapIconMusicNoteBeamed,
  bootstrapIconMusicNoteList,
  bootstrapIconMusicNote,
  bootstrapIconMusicPlayerFill,
  bootstrapIconMusicPlayer,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-m',
  templateUrl: './icons-m.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsMComponent {
  icons = [
    bootstrapIconMap,
    bootstrapIconMicFill,
    bootstrapIconMicMuteFill,
    bootstrapIconMicMute,
    bootstrapIconMic,
    bootstrapIconMoon,
    bootstrapIconMusicNoteBeamed,
    bootstrapIconMusicNoteList,
    bootstrapIconMusicNote,
    bootstrapIconMusicPlayerFill,
    bootstrapIconMusicPlayer,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
