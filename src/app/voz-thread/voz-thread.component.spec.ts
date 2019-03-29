import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VozThreadComponent } from './voz-thread.component';

describe('VozThreadComponent', () => {
  let component: VozThreadComponent;
  let fixture: ComponentFixture<VozThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VozThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VozThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
