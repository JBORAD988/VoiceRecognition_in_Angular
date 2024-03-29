import { TestBed } from '@angular/core/testing';

import { VoiceRecogService } from './voice-recog.service';

describe('VoiceRecogService', () => {
  let service: VoiceRecogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceRecogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
