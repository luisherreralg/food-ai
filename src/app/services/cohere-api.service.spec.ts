import { TestBed } from '@angular/core/testing';

import { CohereApiService } from './cohere-api.service';

describe('CohereApiService', () => {
  let service: CohereApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CohereApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
