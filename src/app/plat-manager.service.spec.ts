import { TestBed } from '@angular/core/testing';

import { PlatManagerService } from './plat-manager.service';

describe('PlatManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatManagerService = TestBed.get(PlatManagerService);
    expect(service).toBeTruthy();
  });
});
