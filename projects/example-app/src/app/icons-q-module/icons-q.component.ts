import { Component, ViewEncapsulation, inject } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconQuestionCircleFill,
  bootstrapIconQuestionCircle,
  bootstrapIconQuestionDiamondFill,
  bootstrapIconQuestionDiamond,
  bootstrapIconQuestionOctagonFill,
  bootstrapIconQuestionOctagon,
  bootstrapIconQuestionSquareFill,
  bootstrapIconQuestionSquare,
  bootstrapIconQuestion,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-q',
  templateUrl: './icons-q.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsQComponent {
  private registry = inject(BootstrapIconsRegistry);

  icons = [
    bootstrapIconQuestionCircleFill,
    bootstrapIconQuestionCircle,
    bootstrapIconQuestionDiamondFill,
    bootstrapIconQuestionDiamond,
    bootstrapIconQuestionOctagonFill,
    bootstrapIconQuestionOctagon,
    bootstrapIconQuestionSquareFill,
    bootstrapIconQuestionSquare,
    bootstrapIconQuestion,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
