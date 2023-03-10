import { TestBed } from '@angular/core/testing';
import { AjudaInterativaService } from './funcionalidade.service';


describe('FuncionalidadeService', () => {
  let service: AjudaInterativaService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjudaInterativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
