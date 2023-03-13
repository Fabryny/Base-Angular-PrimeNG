import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharAjudaComponent } from './detalhar-ajuda.component';

describe('DetalharAjudaComponent', () => {
  let component: DetalharAjudaComponent;
  let fixture: ComponentFixture<DetalharAjudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharAjudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalharAjudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
