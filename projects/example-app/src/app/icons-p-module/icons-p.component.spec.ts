import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsPComponent } from './icons-p.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsPComponent', () => {
  let component: IconsPComponent;
  let fixture: ComponentFixture<IconsPComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsPComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
