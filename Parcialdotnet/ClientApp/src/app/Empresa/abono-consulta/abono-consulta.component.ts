import { AbonoRegistriComponent } from './../abono-registri/abono-registri.component';
import { AbonoService } from './../../services/abono.service';
import { Component, OnInit } from '@angular/core';
import { Abono } from '../models/abono';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-abono-consulta',
  templateUrl: './abono-consulta.component.html',
  styleUrls: ['./abono-consulta.component.css']
})
export class AbonoConsultaComponent implements OnInit {
  abonos: Abono[];
  
  
  constructor(private abonoService: AbonoService,private modalService: NgbModal) { }

  ngOnInit() {
    this.abonoService.get().subscribe(result => {
      this.abonos = result; });

  }
  openModalManipulador()
  {
    this.modalService.open(AbonoRegistriComponent, { size: 'xl' });
  }
 
}
