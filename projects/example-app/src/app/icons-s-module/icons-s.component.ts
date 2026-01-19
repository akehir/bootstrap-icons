import { Component, ViewEncapsulation, inject } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconScrewdriver,
  bootstrapIconSearch,
  bootstrapIconServer,
  bootstrapIconShieldFill,
  bootstrapIconShieldLockFill,
  bootstrapIconShieldLock,
  bootstrapIconShieldShaded,
  bootstrapIconShield,
  bootstrapIconShiftFill,
  bootstrapIconShift,
  bootstrapIconShuffle,
  bootstrapIconSkipBackwardFill,
  bootstrapIconSkipBackward,
  bootstrapIconSkipEndFill,
  bootstrapIconSkipEnd,
  bootstrapIconSkipForwardFill,
  bootstrapIconSkipForward,
  bootstrapIconSkipStartFill,
  bootstrapIconSkipStart,
  bootstrapIconSlashCircleFill,
  bootstrapIconSlashCircle,
  bootstrapIconSlashSquareFill,
  bootstrapIconSlashSquare,
  bootstrapIconSlash,
  bootstrapIconSliders,
  bootstrapIconSoundwave,
  bootstrapIconSpeaker,
  bootstrapIconSquareFill,
  bootstrapIconSquareHalf,
  bootstrapIconSquare,
  bootstrapIconStarFill,
  bootstrapIconStarHalf,
  bootstrapIconStar,
  bootstrapIconStopFill,
  bootstrapIconStop,
  bootstrapIconStopwatchFill,
  bootstrapIconStopwatch,
  bootstrapIconSubtract,
  bootstrapIconSun,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-s',
  templateUrl: './icons-s.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsSComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [

    bootstrapIconScrewdriver,
    bootstrapIconSearch,
    bootstrapIconServer,
    bootstrapIconShieldFill,
    bootstrapIconShieldLockFill,
    bootstrapIconShieldLock,
    bootstrapIconShieldShaded,
    bootstrapIconShield,
    bootstrapIconShiftFill,
    bootstrapIconShift,
    bootstrapIconShuffle,
    bootstrapIconSkipBackwardFill,
    bootstrapIconSkipBackward,
    bootstrapIconSkipEndFill,
    bootstrapIconSkipEnd,
    bootstrapIconSkipForwardFill,
    bootstrapIconSkipForward,
    bootstrapIconSkipStartFill,
    bootstrapIconSkipStart,
    bootstrapIconSlashCircleFill,
    bootstrapIconSlashCircle,
    bootstrapIconSlashSquareFill,
    bootstrapIconSlashSquare,
    bootstrapIconSlash,
    bootstrapIconSliders,
    bootstrapIconSoundwave,
    bootstrapIconSpeaker,
    bootstrapIconSquareFill,
    bootstrapIconSquareHalf,
    bootstrapIconSquare,
    bootstrapIconStarFill,
    bootstrapIconStarHalf,
    bootstrapIconStar,
    bootstrapIconStopFill,
    bootstrapIconStop,
    bootstrapIconStopwatchFill,
    bootstrapIconStopwatch,
    bootstrapIconSubtract,
    bootstrapIconSun,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
