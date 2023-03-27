import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, single, Subject, throwError } from 'rxjs';
import { PostModel } from './post.model';

@Injectable()
export class PostService {
  emitError = new Subject<string>();
  constructor(private http: HttpClient) {}

  sendNewPost(postData: PostModel) {
   return  this.http
      .post(
        'https://angularexercise-f928b-default-rtdb.firebaseio.com/post.json',
        postData, {
          observe: 'response',
          responseType: 'json'
        }
      )
  }

  getAllPost() {

    return this.http
      .get('https://angularexercise-f928b-default-rtdb.firebaseio.com/post.json', {
        observe: 'response',
        responseType: 'json'
      })                                                   //facciamo una chiamata http a questo endPoint
      .pipe(                                              //ci creiamo una pipe che ci serve per filtrare i dati prima di ritornarli, e all'interno di questa pipe cicliamo sull'ObjectKeys di ogni singolo valore che ritorniamo dal backend.
                                                          // successivamente andiamo ad aggiungere all'array un nuovo PostModel i cui valori sono il title e il content e l'id presi dall'array di oggetti json che abbiamo predo dal backend,
                                                          //tramite la request get
                                                  
        map((responseDataAll) => {
          let postArr: PostModel[] = [];
          console.log(responseDataAll)
          const responseDataBody = responseDataAll.body;
          // Trasformiamo la risposta del server in un array di oggetti PostModel
           Object.keys(responseDataBody).map((key) => {
            postArr.push(new PostModel(responseDataBody[key].title, responseDataBody[key].content, key));
           
          })
          return postArr;
        })/* ,
        catchError(() => {
         // const error = new Error("IMPOSSIBILE OTTENERE DATI");
          return throwError(() => "IMPOSSIBILE OTTENERE DATI");
        }) */
        
      );
  }

  deleteById(id: string){
    console.log(id)
    const url = `https://angularexercise-f928b-default-rtdb.firebaseio.com/post/${id}.json`;
    return this.http.delete(url);
  }


    /* 
  getAllPostMio() {

        this.http.get('https://angularexercise-f928b-default-rtdb.firebaseio.com/post.json').pipe(map(responseData => {
            let arrayOfPosts: PostModel[] = [];
            for(let key in responseData){
                responseData[key]
                arrayOfPosts.push(responseData[key])
            }
        })) 
    const arrayOfPosts: PostModel[] = [];
    this.http
      .get(
        'https://angularexercise-f928b-default-rtdb.firebaseio.com/post.json'
      )
      .subscribe((returnData) =>
          Object.keys(returnData).forEach((singlePost) =>
          arrayOfPosts.push(new PostModel(returnData[singlePost].title, returnData[singlePost].content)))
        )
        return arrayOfPosts;
  }
  */
}
