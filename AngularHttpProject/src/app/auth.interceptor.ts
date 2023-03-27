import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { map, tap } from "rxjs";

export class AuthInterceptor implements HttpInterceptor{  

    intercept(req: HttpRequest<any>, next: HttpHandler) { //RQUEST INTERCEPTOR
        const reqModified = req.clone({
            headers: req.headers.append('Auth', 'xyz')
        })
        console.log('interceptor done');
        return next.handle(reqModified).pipe(tap(event => {
            console.log(event);
            if(event.type === HttpEventType.Response){
                console.log('Response arrived, body data: ')
                console.log(event.body);
            }
           })); //la richiesta può continuare il suo flow
    }

}