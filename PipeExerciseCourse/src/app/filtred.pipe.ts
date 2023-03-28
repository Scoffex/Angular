import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filtredPipe'
})
export class FiltredPipe implements PipeTransform{
    transform(value: any, stringaInserita: string, campoDaConfrontare: string, ...args: any[]) {
        if(value.length == 0 || stringaInserita === undefined || stringaInserita === '' ){
            return value;
        }
        let arrValue = [];
        value.forEach(x => {
            if(x[campoDaConfrontare].toLocaleLowerCase().includes(stringaInserita.toLocaleLowerCase())){
            arrValue.push(x);
        }})
        return arrValue;
    }

}