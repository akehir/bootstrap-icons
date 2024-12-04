import { Component, ViewEncapsulation } from '@angular/core';
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

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-s',
  templateUrl: './icons-s.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsSComponent {
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

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
