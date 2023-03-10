import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOperadorComponent } from './cadastrar-operador.component';

describe('CadastrarOperadorComponent', () => {
  let component: CadastrarOperadorComponent;
  let fixture: ComponentFixture<CadastrarOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarOperadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
