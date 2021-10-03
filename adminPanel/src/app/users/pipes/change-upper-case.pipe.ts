import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeUpperCase'
})
export class ChangeUpperCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }
}
