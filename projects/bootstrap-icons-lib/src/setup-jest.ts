// Initializes the Angular TestBed environment for Jest.
import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

setupZonelessTestEnv({
  teardown: { destroyAfterEach: false },
});
