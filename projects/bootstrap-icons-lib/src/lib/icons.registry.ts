import { Injectable } from '@angular/core';

interface AnyRegistryIcon {
  name: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class BootstrapIconsRegistry {

  private registry = new Map<string, string>();

  public registerIcons(icons: AnyRegistryIcon[]): void {
    icons.forEach((icon: AnyRegistryIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }
}
