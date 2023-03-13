import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAjudaComponent } from './visualizar-ajuda.component';

describe('VisualizarAjudaComponent', () => {
  let component: VisualizarAjudaComponent;
  let fixture: ComponentFixture<VisualizarAjudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarAjudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarAjudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
