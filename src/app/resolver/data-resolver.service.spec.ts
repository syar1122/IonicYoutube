import { TestBed } from '@angular/core/testing';

import { ChannelSectionResolverService } from './ChannelSection.service';

describe('DataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChannelSectionResolverService = TestBed.get(ChannelSectionResolverService);
    expect(service).toBeTruthy();
  });
});
