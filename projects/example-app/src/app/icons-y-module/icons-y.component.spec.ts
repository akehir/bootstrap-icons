import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsYComponent } from './icons-y.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsYComponent', () => {
  let component: IconsYComponent;
  let fixture: ComponentFixture<IconsYComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsYComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
