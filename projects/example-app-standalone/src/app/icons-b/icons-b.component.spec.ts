import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsBComponent } from './icons-b.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsBComponent', () => {
  let component: IconsBComponent;
  let fixture: ComponentFixture<IconsBComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsBComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
