import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsVComponent } from './icons-v.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsVComponent', () => {
  let component: IconsVComponent;
  let fixture: ComponentFixture<IconsVComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsVComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
