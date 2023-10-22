import { TestBed } from '@angular/core/testing';

import { FotografiasServicesService } from './fotografias-services.service';

describe('FotografiasServicesService', () => {
  let service: FotografiasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotografiasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
