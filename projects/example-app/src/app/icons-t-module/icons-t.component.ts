import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {

  bootstrapIconTable,
  bootstrapIconTabletLandscape,
  bootstrapIconTablet,
  bootstrapIconTagFill,
  bootstrapIconTag,
  bootstrapIconTerminalFill,
  bootstrapIconTerminal,
  bootstrapIconTextCenter,
  bootstrapIconTextIndentLeft,
  bootstrapIconTextIndentRight,
  bootstrapIconTextLeft,
  bootstrapIconTextRight,
  bootstrapIconTextareaT,
  bootstrapIconTextarea,
  bootstrapIconThreeDotsVertical,
  bootstrapIconThreeDots,
  bootstrapIconToggleOff,
  bootstrapIconToggleOn,
  bootstrapIconToggles,
  bootstrapIconTools,
  bootstrapIconTrashFill,
  bootstrapIconTrash,
  bootstrapIconTrash2Fill,
  bootstrapIconTrash2,
  bootstrapIconTriangleFill,
  bootstrapIconTriangleHalf,
  bootstrapIconTriangle,
  bootstrapIconTrophy,
  bootstrapIconTvFill,
  bootstrapIconTv,
  bootstrapIconTypeBold,
  bootstrapIconTypeH1,
  bootstrapIconTypeH2,
  bootstrapIconTypeH3,
  bootstrapIconTypeItalic,
  bootstrapIconTypeStrikethrough,
  bootstrapIconTypeUnderline,
  bootstrapIconType,
} from '@triangular/bootstrap-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-t',
  templateUrl: './icons-t.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class IconsTComponent {
  icons = [

    bootstrapIconTable,
    bootstrapIconTabletLandscape,
    bootstrapIconTablet,
    bootstrapIconTagFill,
    bootstrapIconTag,
    bootstrapIconTerminalFill,
    bootstrapIconTerminal,
    bootstrapIconTextCenter,
    bootstrapIconTextIndentLeft,
    bootstrapIconTextIndentRight,
    bootstrapIconTextLeft,
    bootstrapIconTextRight,
    bootstrapIconTextareaT,
    bootstrapIconTextarea,
    bootstrapIconThreeDotsVertical,
    bootstrapIconThreeDots,
    bootstrapIconToggleOff,
    bootstrapIconToggleOn,
    bootstrapIconToggles,
    bootstrapIconTools,
    bootstrapIconTrashFill,
    bootstrapIconTrash,
    bootstrapIconTrash2Fill,
    bootstrapIconTrash2,
    bootstrapIconTriangleFill,
    bootstrapIconTriangleHalf,
    bootstrapIconTriangle,
    bootstrapIconTrophy,
    bootstrapIconTvFill,
    bootstrapIconTv,
    bootstrapIconTypeBold,
    bootstrapIconTypeH1,
    bootstrapIconTypeH2,
    bootstrapIconTypeH3,
    bootstrapIconTypeItalic,
    bootstrapIconTypeStrikethrough,
    bootstrapIconTypeUnderline,
    bootstrapIconType,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
