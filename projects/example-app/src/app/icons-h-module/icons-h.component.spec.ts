import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsHComponent } from './icons-h.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsHComponent', () => {
  let component: IconsHComponent;
  let fixture: ComponentFixture<IconsHComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsHComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
