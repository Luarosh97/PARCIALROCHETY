import { CreditoRegistroComponent } from './../credito-registro/credito-registro.component';
import { Credito } from './../models/credito';
import { Component, OnInit } from '@angular/core';
import { CreditoService } from 'src/app/services/credito.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-credoto-consulta',
  templateUrl: './credoto-consulta.component.html',
  styleUrls: ['./credoto-consulta.component.css']
})
export class CredotoConsultaComponent implements OnInit {
  creditos: Credito[];
  searchText: string;
  
  constructor(private creditoService: CreditoService,private modalService: NgbModal) { }

  ngOnInit() {
    this.creditoService.get().subscribe(result => {
      this.creditos = result;});

  
    }
    openModalManipulador()
  {
    this.modalService.open(CreditoRegistroComponent, { size: 'xl' });
  }
  
}


