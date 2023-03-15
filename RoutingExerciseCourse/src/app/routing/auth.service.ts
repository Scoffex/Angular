export class AuthService {
  private isLogged: boolean = false;

  isAuthenticatd() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.isLogged)
        resolve(this.isLogged);
      }, 800);
    });
    return promise;
  }

  login() {
    this.isLogged = true;
    console.log(this.isLogged)
  }

  logOut() {
    this.isLogged = false;
    console.log(this.isLogged)
  }
}
