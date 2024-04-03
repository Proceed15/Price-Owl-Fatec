import { TestBed } from '@angular/core/testing';

import { MercadolivreService } from './mercadolivre.service';

describe('MercadolivreService', () => {
  let service: MercadolivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadolivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
