import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(valor: string, limite: number = 10): string {
    if (!valor) {
      return '';
    }
    if (valor.length <= limite) {
      return valor;
    }
    return valor.substring(0, limite) + '...';
  }

}
