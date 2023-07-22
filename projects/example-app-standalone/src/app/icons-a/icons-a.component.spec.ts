import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAComponent } from './icons-a.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsAComponent', () => {
  let component: IconsAComponent;
  let fixture: ComponentFixture<IconsAComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsAComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
