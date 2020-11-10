import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoRegistroComponent } from './credito-registro.component';

describe('CreditoRegistroComponent', () => {
  let component: CreditoRegistroComponent;
  let fixture: ComponentFixture<CreditoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
