import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsNComponent } from './icons-n.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsNComponent', () => {
  let component: IconsNComponent;
  let fixture: ComponentFixture<IconsNComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsNComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
