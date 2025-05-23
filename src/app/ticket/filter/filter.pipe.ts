import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone:true
})
export class FilterPipe <T extends { [k: string]: any }> implements PipeTransform {
  transform(value: T[], phrase: string,key:string): T[] {
    if (!Array.isArray(value) || !phrase || !key) {
    return value;
  }

  return value.filter(item => 
    item[key]?.toString().toLowerCase().includes(phrase.toLowerCase())
  );
  }
}
