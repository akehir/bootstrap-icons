import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconEggFill,
  bootstrapIconEggFried,
  bootstrapIconEgg,
  bootstrapIconEjectFill,
  bootstrapIconEject,
  bootstrapIconEnvelopeFill,
  bootstrapIconEnvelopeOpenFill,
  bootstrapIconEnvelopeOpen,
  bootstrapIconEnvelope,
  bootstrapIconExclamationCircleFill,
  bootstrapIconExclamationCircle,
  bootstrapIconExclamationDiamondFill,
  bootstrapIconExclamationDiamond,
  bootstrapIconExclamationOctagonFill,
  bootstrapIconExclamationOctagon,
  bootstrapIconExclamationSquareFill,
  bootstrapIconExclamationSquare,
  bootstrapIconExclamationTriangleFill,
  bootstrapIconExclamationTriangle,
  bootstrapIconExclamation,
  bootstrapIconExclude,
  bootstrapIconEyeFill,
  bootstrapIconEyeSlashFill,
  bootstrapIconEyeSlash,
  bootstrapIconEye,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-e',
  templateUrl: './icons-e.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsEComponent {
  icons = [
    bootstrapIconEggFill,
    bootstrapIconEggFried,
    bootstrapIconEgg,
    bootstrapIconEjectFill,
    bootstrapIconEject,
    bootstrapIconEnvelopeFill,
    bootstrapIconEnvelopeOpenFill,
    bootstrapIconEnvelopeOpen,
    bootstrapIconEnvelope,
    bootstrapIconExclamationCircleFill,
    bootstrapIconExclamationCircle,
    bootstrapIconExclamationDiamondFill,
    bootstrapIconExclamationDiamond,
    bootstrapIconExclamationOctagonFill,
    bootstrapIconExclamationOctagon,
    bootstrapIconExclamationSquareFill,
    bootstrapIconExclamationSquare,
    bootstrapIconExclamationTriangleFill,
    bootstrapIconExclamationTriangle,
    bootstrapIconExclamation,
    bootstrapIconExclude,
    bootstrapIconEyeFill,
    bootstrapIconEyeSlashFill,
    bootstrapIconEyeSlash,
    bootstrapIconEye,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
