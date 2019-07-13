import { TestBed } from '@angular/core/testing';

import { ParaGeneratorService } from './para-generator.service';

describe('ParaGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParaGeneratorService = TestBed.get(ParaGeneratorService);
    expect(service).toBeTruthy();
  });
});
