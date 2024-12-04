import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconPaperclip,
  bootstrapIconPauseFill,
  bootstrapIconPause,
  bootstrapIconPen,
  bootstrapIconPencilSquare,
  bootstrapIconPencil,
  bootstrapIconPentagonFill,
  bootstrapIconPentagonHalf,
  bootstrapIconPentagon,
  bootstrapIconPeopleFill,
  bootstrapIconPeople,
  bootstrapIconPersonBoundingBox,
  bootstrapIconPersonCheckFill,
  bootstrapIconPersonCheck,
  bootstrapIconPersonDashFill,
  bootstrapIconPersonDash,
  bootstrapIconPersonFill,
  bootstrapIconPersonLinesFill,
  bootstrapIconPersonPlusFill,
  bootstrapIconPersonPlus,
  bootstrapIconPersonSquare,
  bootstrapIconPerson,
  bootstrapIconPhoneLandscape,
  bootstrapIconPhone,
  bootstrapIconPieChartFill,
  bootstrapIconPieChart,
  bootstrapIconPipFill,
  bootstrapIconPip,
  bootstrapIconPlayFill,
  bootstrapIconPlay,
  bootstrapIconPlug,
  bootstrapIconPlusCircleFill,
  bootstrapIconPlusCircle,
  bootstrapIconPlusSquareFill,
  bootstrapIconPlusSquare,
  bootstrapIconPlus,
  bootstrapIconPower,
  bootstrapIconPuzzleFill,
  bootstrapIconPuzzle,
} from '@triangular/bootstrap-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-p',
  templateUrl: './icons-p.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsPComponent {
  icons = [

    bootstrapIconPaperclip,
    bootstrapIconPauseFill,
    bootstrapIconPause,
    bootstrapIconPen,
    bootstrapIconPencilSquare,
    bootstrapIconPencil,
    bootstrapIconPentagonFill,
    bootstrapIconPentagonHalf,
    bootstrapIconPentagon,
    bootstrapIconPeopleFill,
    bootstrapIconPeople,
    bootstrapIconPersonBoundingBox,
    bootstrapIconPersonCheckFill,
    bootstrapIconPersonCheck,
    bootstrapIconPersonDashFill,
    bootstrapIconPersonDash,
    bootstrapIconPersonFill,
    bootstrapIconPersonLinesFill,
    bootstrapIconPersonPlusFill,
    bootstrapIconPersonPlus,
    bootstrapIconPersonSquare,
    bootstrapIconPerson,
    bootstrapIconPhoneLandscape,
    bootstrapIconPhone,
    bootstrapIconPieChartFill,
    bootstrapIconPieChart,
    bootstrapIconPipFill,
    bootstrapIconPip,
    bootstrapIconPlayFill,
    bootstrapIconPlay,
    bootstrapIconPlug,
    bootstrapIconPlusCircleFill,
    bootstrapIconPlusCircle,
    bootstrapIconPlusSquareFill,
    bootstrapIconPlusSquare,
    bootstrapIconPlus,
    bootstrapIconPower,
    bootstrapIconPuzzleFill,
    bootstrapIconPuzzle,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
