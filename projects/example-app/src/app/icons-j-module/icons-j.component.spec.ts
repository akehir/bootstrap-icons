import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsJComponent } from './icons-j.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsJComponent', () => {
  let component: IconsJComponent;
  let fixture: ComponentFixture<IconsJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsJComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
