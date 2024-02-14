import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallestPokemonsComponent } from './tallest-pokemons.component';

describe('TallestPokemonsComponent', () => {
  let component: TallestPokemonsComponent;
  let fixture: ComponentFixture<TallestPokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallestPokemonsComponent]
    });
    fixture = TestBed.createComponent(TallestPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
