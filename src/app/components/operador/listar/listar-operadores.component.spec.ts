import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOperadoresComponent } from './listar-operadores.component';

describe('ListarOperadoresComponent', () => {
  let component: ListarOperadoresComponent;
  let fixture: ComponentFixture<ListarOperadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOperadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarOperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
