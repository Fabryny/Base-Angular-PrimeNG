import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemBasicaComponent } from './listagem-basica.component';

describe('ListagemBasicaComponent', () => {
  let component: ListagemBasicaComponent;
  let fixture: ComponentFixture<ListagemBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemBasicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
