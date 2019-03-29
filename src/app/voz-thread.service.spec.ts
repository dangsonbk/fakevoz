import { TestBed } from '@angular/core/testing';

import { VozThreadService } from './voz-thread.service';

describe('VozThreadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VozThreadService = TestBed.get(VozThreadService);
    expect(service).toBeTruthy();
  });
});
