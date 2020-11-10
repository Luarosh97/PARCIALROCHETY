import { Pipe, PipeTransform } from '@angular/core';
import { Credito } from '../Empresa/models/credito';

@Pipe({
  name: 'filtroPersona'
})
export class FiltroPersonaPipe implements PipeTransform {

  transform(creditos: Credito[], searchText: string ): any {
    // tslint:disable-next-line:curly
    if (searchText == null) return creditos;
         return creditos.filter(p => p.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
         || p.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
