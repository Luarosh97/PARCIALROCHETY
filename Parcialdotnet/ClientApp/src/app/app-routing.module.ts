import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CredotoConsultaComponent } from './Empresa/credito-consulta/credoto-consulta.component';
import { AbonoConsultaComponent } from './Empresa/abono-consulta/abono-consulta.component';

const routes: Routes = [
  {
  path: 'creditoConsulta',
  component: CredotoConsultaComponent
  },
  {
  path: 'abonoConsulta',
  component: AbonoConsultaComponent
  }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
