import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsUComponent } from './icons-u.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsUComponent', () => {
  let component: IconsUComponent;
  let fixture: ComponentFixture<IconsUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsUComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
