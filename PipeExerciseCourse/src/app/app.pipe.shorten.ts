import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenStringPipe implements PipeTransform{

    transform(value: any, troncatura: number, ...args: any[]) {
        let string: string = value;
      
        return string.substring(troncatura)


    }

}