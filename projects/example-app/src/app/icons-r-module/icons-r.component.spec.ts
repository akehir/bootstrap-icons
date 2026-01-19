import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsRComponent } from './icons-r.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsRComponent', () => {
  let component: IconsRComponent;
  let fixture: ComponentFixture<IconsRComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsRComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
