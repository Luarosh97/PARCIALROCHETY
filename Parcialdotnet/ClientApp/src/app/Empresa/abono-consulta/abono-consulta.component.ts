import { AbonoService } from './../../services/abono.service';
import { Component, OnInit } from '@angular/core';
import { Abono } from '../models/abono';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AbonoRegistriComponent } from '../abono-registri/abono-registri.component';

@Component({
  selector: 'app-abono-consulta',
  templateUrl: './abono-consulta.component.html',
  styleUrls: ['./abono-consulta.component.css']
})
export class AbonoConsultaComponent implements OnInit {
  abonos: Abono[];
  
  totalAyudas:string;
  constructor(private abonoService: AbonoService,private modalService: NgbModal) { }

  ngOnInit() {
  }
  Consultar(){
    this.abonoService.Consultar().subscribe(result => {
      this.abonos = result;
      this.abonos = this.abonos;
    });
    }

  
  

}
