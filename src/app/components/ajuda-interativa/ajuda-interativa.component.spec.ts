import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaInterativaComponent } from './ajuda-interativa.component';

describe('AjudaInterativaComponent', () => {
  let component: AjudaInterativaComponent;
  let fixture: ComponentFixture<AjudaInterativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudaInterativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjudaInterativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
