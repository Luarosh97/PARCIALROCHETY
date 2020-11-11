import { AbonoService } from './../../services/abono.service';
import { Abono } from './../models/abono';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Mensajes } from 'src/app/services/mensajes';

@Component({
  selector: 'app-abono-registri',
  templateUrl: './abono-registri.component.html',
  styleUrls: ['./abono-registri.component.css']
})
export class AbonoRegistriComponent implements OnInit {
  Abono: Abono;
  formGroup: FormGroup;
  submitted = false;
  // tslint:disable-next-line:max-line-length
  constructor(private abonoservice: AbonoService,private formBuilder: FormBuilder,private mensajes :Mensajes) { }

  ngOnInit() {
    this.buildForm();
  }
  
  buildForm() {
    this.Abono=new Abono();
    this.Abono.idAbono= '';
    this.Abono.fecha= '';
    this.Abono.valorAbono= 0;
    

    this.formGroup = this.formBuilder.group({
      // tslint:disable-next-line:max-line-length
      
      idAbono: [this.Abono.idAbono, [Validators.required]],
      fecha: [this.Abono.fecha, [Validators.required]],
      valorAbono: [this.Abono.valorAbono, [Validators.required]],
      });
  }


  get control() {
    return this.formGroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }
  add(){
    this.Abono = this.formGroup.value;
    this.abonoservice.post(this.Abono).subscribe(p => {
      if (p != null) {
       this.mensajes.Mostrar("Operacion Exitosa");
        this.Abono= p;
      }
    });
  }


}
