import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDComponent } from './icons-d.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsDComponent', () => {
  let component: IconsDComponent;
  let fixture: ComponentFixture<IconsDComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsDComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
