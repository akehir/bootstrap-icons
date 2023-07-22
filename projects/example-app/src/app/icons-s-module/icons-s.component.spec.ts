import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSComponent } from './icons-s.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsSComponent', () => {
  let component: IconsSComponent;
  let fixture: ComponentFixture<IconsSComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsSComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
