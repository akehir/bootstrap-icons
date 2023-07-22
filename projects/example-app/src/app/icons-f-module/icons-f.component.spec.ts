import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFComponent } from './icons-f.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsFComponent', () => {
  let component: IconsFComponent;
  let fixture: ComponentFixture<IconsFComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsFComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
