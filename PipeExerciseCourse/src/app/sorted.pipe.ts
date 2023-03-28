import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sortedPipe'
})
export class SortedPipe implements PipeTransform{
    transform(value: any, stringaInserita: string, ...args: any[]) {
        if(value.length == 0 || stringaInserita === ''){
            return value;
        }
     
        value.sort((a, b) => a[stringaInserita].localeCompare(b[stringaInserita]));

       
        return value;
    }

}