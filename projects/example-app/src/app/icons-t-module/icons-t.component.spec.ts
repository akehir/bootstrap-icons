import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsTComponent } from './icons-t.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsTComponent', () => {
  let component: IconsTComponent;
  let fixture: ComponentFixture<IconsTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsTComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
