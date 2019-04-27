import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
      providers: [DataService]
  }));

  it('Service should be created and get the response', () => {
    const service: DataService = TestBed.get(DataService);
    service.getOwners().subscribe(data => {
      expect(data).toBe(Object);
    });
  });
});
