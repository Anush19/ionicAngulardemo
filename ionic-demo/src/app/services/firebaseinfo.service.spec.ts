import { TestBed } from '@angular/core/testing';

import { FirebaseNewsService } from './firebaseinfo.service';

describe('FirebaseinfoService', () => {
  let service: FirebaseNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
