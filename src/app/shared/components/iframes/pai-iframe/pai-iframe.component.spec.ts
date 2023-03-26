import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiIframeComponent } from './pai-iframe.component';

describe('PaiIframeComponent', () => {
  let component: PaiIframeComponent;
  let fixture: ComponentFixture<PaiIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiIframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
