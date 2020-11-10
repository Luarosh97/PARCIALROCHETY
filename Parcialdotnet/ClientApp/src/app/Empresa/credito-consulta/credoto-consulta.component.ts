import { Credito } from './../models/credito';
import { Component, OnInit } from '@angular/core';
import { CreditoService } from 'src/app/services/credito.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreditoRegistroComponent } from '../credito-registro/credito-registro.component';

@Component({
  selector: 'app-credoto-consulta',
  templateUrl: './credoto-consulta.component.html',
  styleUrls: ['./credoto-consulta.component.css']
})
export class CredotoConsultaComponent implements OnInit {
  creditos: Credito[];
  searchText: string;
  totalAyudas:string;
  constructor(private creditoService: CreditoService,private modalService: NgbModal) { }

  ngOnInit() {
  }

  Consultar(){
    this.creditoService.Consultar("Consulta").subscribe(result => {
      this.creditos = result;
      this.creditos = this.creditos;
    });
    
  }
  openModalManipulador()
  {
    this.modalService.open(CreditoRegistroComponent, { size: 'xl' });
  }
}

}
