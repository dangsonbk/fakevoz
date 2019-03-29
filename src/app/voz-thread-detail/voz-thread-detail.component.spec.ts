import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VozThreadDetailComponent } from './voz-thread-detail.component';

describe('VozThreadDetailComponent', () => {
  let component: VozThreadDetailComponent;
  let fixture: ComponentFixture<VozThreadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VozThreadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VozThreadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
