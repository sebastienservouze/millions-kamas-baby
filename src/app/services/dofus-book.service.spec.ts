import { TestBed } from '@angular/core/testing';

import { DofusBookService } from './dofus-book.service';

describe('DofusBookService', () => {
  let service: DofusBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DofusBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
