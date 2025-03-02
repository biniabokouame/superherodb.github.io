import { TestBed } from '@angular/core/testing';

import { MyDataService } from './my-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyDataService', () => {
  let service: MyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
