import { Component, ViewEncapsulation, inject } from '@angular/core';
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
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsEComponent {
  private registry = inject(BootstrapIconsRegistry);

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

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
