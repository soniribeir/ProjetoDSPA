import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleTransformation'
})
export class TitleTransformationPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value.replace(/\b\w/g, (char) => char.toUpperCase());
  }
}


