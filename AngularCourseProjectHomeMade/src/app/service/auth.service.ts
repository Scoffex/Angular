import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Subject, tap, throwError } from "rxjs";
import { UserModel } from "../auth-component/user.model";

export interface AuthResponseData {
    kind: string;
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string
    localId: string
    registred?: boolean
}
@Injectable()
export class AuthService {
    userEmitter = new Subject<UserModel>();
    constructor(private httpClient: HttpClient) {

    }

    signIn(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJJ9AzgBG5BbcQDVnv17ROdmJIqXhlNJQ', { email: email, password: password, returnSecureToken: true }).pipe(catchError(errorMessage => {
            return this.handleError(errorMessage);
        }), tap(data => {
            console.log(data)
            let user = new UserModel(data.email, data.localId, data.idToken, new Date(new Date().getTime() + (Number(data.expiresIn) * 1000)));
            this.userEmitter.next(user);
        }))
    }

    signUp(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJJ9AzgBG5BbcQDVnv17ROdmJIqXhlNJQ', { email: email, password: password, returnSecureToken: true }).pipe(catchError(errorMessage => {
            return this.handleError(errorMessage);
        }), tap(data => {
            this.handleAuthentication(data.email, data.localId, data.idToken, Number(data.expiresIn))
            console.log(data)
        }))
    }

    handleError(errorMessage: HttpErrorResponse) {
        console.log(errorMessage)
        let errorToReturn = 'An Unkonw error occured!'
        if (!errorMessage.error.error || !errorMessage.error) {
            return throwError(() => new Error(errorToReturn));
        }
        switch (errorMessage.error.error.message) {
            case 'EMAIL_EXISTS':
                errorToReturn = 'The email address is already in use by another account';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorToReturn = 'We have blocked all requests from this device due to unusual activity. Try again later';
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorToReturn = 'Password sign-in is disabled for this project.';
                break;
            case 'WEAK_PASSWORD : Password should be at least 6 characters':
                errorToReturn = 'Password should be at least 6 characters';
                break;
            case 'EMAIL_NOT_FOUND':
                errorToReturn = 'There is no user record corresponding to this identifier. The user may have been deleted.';
                break;
            case 'INVALID_PASSWORD':
                errorToReturn = 'The password is invalid or the user does not have a password.';
                break;
            case 'USER_DISABLED':
                errorToReturn = 'The user account has been disabled by an administrator.';
                break;
        }
        return throwError(() => new Error(errorToReturn));
    }

    handleAuthentication(email: string, localId: string, idToken: string, expiresIn: number) {
        let user = new UserModel(email, localId, idToken, new Date(new Date().getTime() + (expiresIn * 1000)));
        this.userEmitter.next(user);
    }
}