import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVersaoComponent } from './listar-versao.component';

describe('ListarVersaoComponent', () => {
  let component: ListarVersaoComponent;
  let fixture: ComponentFixture<ListarVersaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVersaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
