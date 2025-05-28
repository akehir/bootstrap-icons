import { Component, ViewEncapsulation } from '@angular/core';
import { BootstrapIconsRegistry, } from '@triangular/bootstrap-icons';

import {
  bootstrapIconLaptop,
  bootstrapIconLayersFill,
  bootstrapIconLayersHalf,
  bootstrapIconLayers,
  bootstrapIconLayoutSidebarInsetReverse,
  bootstrapIconLayoutSidebarInset,
  bootstrapIconLayoutSidebarReverse,
  bootstrapIconLayoutSidebar,
  bootstrapIconLayoutSplit,
  bootstrapIconLayoutTextSidebarReverse,
  bootstrapIconLayoutTextSidebar,
  bootstrapIconLayoutTextWindowReverse,
  bootstrapIconLayoutTextWindow,
  bootstrapIconLayoutThreeColumns,
  bootstrapIconLayoutWtf,
  bootstrapIconLifePreserver,
  bootstrapIconLightningFill,
  bootstrapIconLightning,
  bootstrapIconLink45Deg,
  bootstrapIconLink,
  bootstrapIconListCheck,
  bootstrapIconListNested,
  bootstrapIconListOl,
  bootstrapIconListTask,
  bootstrapIconListUl,
  bootstrapIconList,
  bootstrapIconLockFill,
  bootstrapIconLock,
} from '@triangular/bootstrap-icons/icons';

@Component({
  selector: 'app-icons-l',
  templateUrl: './icons-l.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsLComponent {
  icons = [
    bootstrapIconLaptop,
    bootstrapIconLayersFill,
    bootstrapIconLayersHalf,
    bootstrapIconLayers,
    bootstrapIconLayoutSidebarInsetReverse,
    bootstrapIconLayoutSidebarInset,
    bootstrapIconLayoutSidebarReverse,
    bootstrapIconLayoutSidebar,
    bootstrapIconLayoutSplit,
    bootstrapIconLayoutTextSidebarReverse,
    bootstrapIconLayoutTextSidebar,
    bootstrapIconLayoutTextWindowReverse,
    bootstrapIconLayoutTextWindow,
    bootstrapIconLayoutThreeColumns,
    bootstrapIconLayoutWtf,
    bootstrapIconLifePreserver,
    bootstrapIconLightningFill,
    bootstrapIconLightning,
    bootstrapIconLink45Deg,
    bootstrapIconLink,
    bootstrapIconListCheck,
    bootstrapIconListNested,
    bootstrapIconListOl,
    bootstrapIconListTask,
    bootstrapIconListUl,
    bootstrapIconList,
    bootstrapIconLockFill,
    bootstrapIconLock,
  ];

  constructor(private registry: BootstrapIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
