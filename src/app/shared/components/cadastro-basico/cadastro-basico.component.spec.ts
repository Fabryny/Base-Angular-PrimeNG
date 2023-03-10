import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBasicoComponent } from './cadastro-basico.component';

describe('CadastroBasicoComponent', () => {
  let component: CadastroBasicoComponent;
  let fixture: ComponentFixture<CadastroBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBasicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
