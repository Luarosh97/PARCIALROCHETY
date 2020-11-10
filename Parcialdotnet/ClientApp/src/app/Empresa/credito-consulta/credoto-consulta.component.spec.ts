import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredotoConsultaComponent } from './credoto-consulta.component';

describe('CredotoConsultaComponent', () => {
  let component: CredotoConsultaComponent;
  let fixture: ComponentFixture<CredotoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredotoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredotoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
