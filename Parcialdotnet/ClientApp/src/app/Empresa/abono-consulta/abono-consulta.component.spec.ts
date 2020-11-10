import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonoConsultaComponent } from './abono-consulta.component';

describe('AbonoConsultaComponent', () => {
  let component: AbonoConsultaComponent;
  let fixture: ComponentFixture<AbonoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
