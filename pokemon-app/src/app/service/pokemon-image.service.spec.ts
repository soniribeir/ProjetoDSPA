import { TestBed } from '@angular/core/testing';

import { PokemonImageService } from './pokemon-image.service';

describe('PokemonImageService', () => {
  let service: PokemonImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
