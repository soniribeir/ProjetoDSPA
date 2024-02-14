import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaviestPokemonsComponent } from './heaviest-pokemons.component';

describe('HeaviestPokemonsComponent', () => {
  let component: HeaviestPokemonsComponent;
  let fixture: ComponentFixture<HeaviestPokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaviestPokemonsComponent]
    });
    fixture = TestBed.createComponent(HeaviestPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
