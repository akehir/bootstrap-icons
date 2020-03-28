import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapIconComponent } from './icon.component';

describe('BootstrapIconComponent', () => {
  let component: BootstrapIconComponent;
  let fixture: ComponentFixture<BootstrapIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapIconComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
