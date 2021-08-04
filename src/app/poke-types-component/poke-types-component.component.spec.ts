import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTypesComponentComponent } from './poke-types-component.component';

describe('PokeTypesComponentComponent', () => {
  let component: PokeTypesComponentComponent;
  let fixture: ComponentFixture<PokeTypesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTypesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTypesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
