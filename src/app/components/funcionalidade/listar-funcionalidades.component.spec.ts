import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFuncionalidadesComponent } from './listar-funcionalidades.component';

describe('ListarFuncionalidadesComponent', () => {
  let component: ListarFuncionalidadesComponent;
  let fixture: ComponentFixture<ListarFuncionalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFuncionalidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFuncionalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
