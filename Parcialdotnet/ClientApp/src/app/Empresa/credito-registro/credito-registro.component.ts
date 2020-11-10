import { Credito } from './../models/credito';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditoService } from 'src/app/services/credito.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Mensajes } from 'src/app/services/mensajes';

@Component({
  selector: 'app-credito-registro',
  templateUrl: './credito-registro.component.html',
  styleUrls: ['./credito-registro.component.css']
})
export class CreditoRegistroComponent implements OnInit {
  credito: Credito;
  formGroup: FormGroup;
  submitted = false;
  // tslint:disable-next-line:max-line-length
  constructor(private creditoService: CreditoService,private formBuilder: FormBuilder,private mensaje:Mensajes) { 
}

    
  ngOnInit() {
    this.buildForm();
  }
  private buildForm() {
    this.credito = new Credito();
    this.credito.identificacion = '';
    this.credito.nombre= '';
    this.credito.cantidadEmp= 0;
    this.credito.valorActivo = 0;
    this.credito.valorCredito= 0;

    this.formGroup = this.formBuilder.group({
      // tslint:disable-next-line:max-line-length
      identificacion: [this.credito.identificacion, [Validators.required,Validators.minLength(7),Validators.maxLength(13),Validators.pattern('^[0-9]+$')]],
      nombre: [this.credito.nombre, [Validators.required,Validators.minLength(4)]],
      cantidadEmp: [this.credito.cantidadEmp, [Validators.required, Validators.minLength(1)]],
      valorActivo: [this.credito.valorActivo, [Validators.required, Validators.minLength(1)]],
      valorCredito: [this.credito.valorCredito, [Validators.required, Validators.minLength(1)]]
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
  add() {
    this.credito = this.formGroup.value;
    this.creditoService.post(this.credito).subscribe(p => {
      if (p != null) {
        this.mensaje.Mostrar('¡Operación exitosa!');
        this.credito= p;
      }
    });
  }

}
