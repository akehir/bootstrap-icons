import { Component, ViewEncapsulation } from '@angular/core';
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
})
export class IconsQComponent {
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

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
