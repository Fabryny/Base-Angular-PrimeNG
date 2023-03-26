import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeFilhoComponent } from './iframe-filho.component';

describe('IframeFilhoComponent', () => {
  let component: IframeFilhoComponent;
  let fixture: ComponentFixture<IframeFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeFilhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
