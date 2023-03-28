import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appPipe'
})
export class AppPipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        console.log(value);
        let arrStringWord: string[] = value.split(" ");
        return `${arrStringWord[0].toLocaleUpperCase()} ${arrStringWord[1].toLocaleLowerCase()}`


    }

}