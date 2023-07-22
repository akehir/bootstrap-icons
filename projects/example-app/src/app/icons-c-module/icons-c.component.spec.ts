import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsCComponent } from './icons-c.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsCComponent', () => {
  let component: IconsCComponent;
  let fixture: ComponentFixture<IconsCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsCComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
