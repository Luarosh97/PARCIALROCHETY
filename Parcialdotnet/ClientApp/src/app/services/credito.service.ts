import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Credito } from '../Empresa/models/credito';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  baseUrl: string;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) { }

    Consultar(formulario: Credito): Observable<Credito[]> {
      return this.http.get<Credito[]>(this.baseUrl + 'api/Credito/' + formulario).pipe (
        tap(_ => this.handleErrorService.log('Datos enviados exitosamente')),
        catchError(this.handleErrorService.handleError<Credito[]>('Consulta Credito',null))
      );
    }
    post(persona: Credito): Observable<Credito> {
      return this.http.post<Credito>(this.baseUrl + 'api/Credito', persona)
        .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Credito>('Registrar Credito', null))
        );
    }

  }
