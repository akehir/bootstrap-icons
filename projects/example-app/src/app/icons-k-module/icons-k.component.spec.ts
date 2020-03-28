import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsKComponent } from './icons-k.component';
import { BootstrapIconsModule } from '@triangular/bootstrap-icons';

describe('IconsKComponent', () => {
  let component: IconsKComponent;
  let fixture: ComponentFixture<IconsKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsKComponent ],
      imports: [
        BootstrapIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
