import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditoRegistroComponent } from './Empresa/credito-registro/credito-registro.component';
import { CredotoConsultaComponent } from './Empresa/credito-consulta/credoto-consulta.component';
import { AbonoRegistriComponent } from './Empresa/abono-registri/abono-registri.component';
import { AbonoConsultaComponent } from './Empresa/abono-consulta/abono-consulta.component';
import { CreditoService } from './services/credito.service';
import { AbonoService } from './services/abono.service';
import { FiltroPersonaPipe } from './pipe/filtro-persona.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FooterComponent,
    EncabezadoComponent,
    AlertModalComponent,
    CreditoRegistroComponent,
    CredotoConsultaComponent,
    AbonoRegistriComponent,
    AbonoConsultaComponent,
    FiltroPersonaPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  entryComponents:[AlertModalComponent,CreditoRegistroComponent,AbonoRegistriComponent],
  providers: [CreditoService,AbonoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
