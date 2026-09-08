import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarLivros } from './adicionar-livros';

describe('AdicionarLivros', () => {
  let component: AdicionarLivros;
  let fixture: ComponentFixture<AdicionarLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarLivros],
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarLivros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
