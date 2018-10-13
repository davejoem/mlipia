import { TestBed } from '@angular/core/testing';

import { Storage as Store } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Store = TestBed.get(Store);
    expect(service).toBeTruthy();
  });
});
