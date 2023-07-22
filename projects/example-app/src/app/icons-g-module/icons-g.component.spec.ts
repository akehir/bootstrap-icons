import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsGComponent } from './icons-g.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsGComponent', () => {
  let component: IconsGComponent;
  let fixture: ComponentFixture<IconsGComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsGComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
