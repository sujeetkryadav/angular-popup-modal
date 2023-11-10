import { TestBed } from '@angular/core/testing';

import { AgularPopupModalService } from './angular-popup-modal.service';

describe('AgularPopupModalService', () => {
  let service: AgularPopupModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgularPopupModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
