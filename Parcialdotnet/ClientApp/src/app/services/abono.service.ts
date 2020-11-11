import { Abono } from './../Empresa/models/abono';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbonoService {
  baseUrl: string;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
      this.baseUrl = baseUrl;
     }

     get(): Observable<Abono[]> {
      return this.http.get<Abono[]>(this.baseUrl + 'api/Abono')
        .pipe(tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Abono[]>('Consulta Abono', null))
        );
    }
    
    post(abono: Abono): Observable<Abono> {
      return this.http.post<Abono>(this.baseUrl + 'api/Abono', abono)
        .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Abono>('Registrar Abono', null))
        );
    }
    }
