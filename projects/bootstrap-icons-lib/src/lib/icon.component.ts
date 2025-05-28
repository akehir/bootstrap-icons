import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
  ViewEncapsulation,
  DOCUMENT
} from '@angular/core';
import { BootstrapIconsRegistry } from './icons.registry';


@Component({
  selector: 'bootstrap-icon',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class BootstrapIconComponent {
  private svgIcon: SVGElement;

  constructor(
    private element: ElementRef,
    private iconsRegistry: BootstrapIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: Document,
  ) {}

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconsRegistry.getIcon(iconName);

    if (svgData) {
      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    if (div instanceof HTMLElement) {
      div.innerHTML = svgContent;
      return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
  }
}
