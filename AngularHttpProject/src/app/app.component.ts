import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post.model';
import { PostService } from './post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  postList: PostModel[] = [];
  isLoading: boolean = false;
  formPost: FormGroup;
  isValid: boolean = false;
  errorHandler: string[] = [];
  error: string = null;
  subscriptionError: Subscription;
  constructor(private postService: PostService) {

  }
  ngOnDestroy(): void {
    this.subscriptionError.unsubscribe();
  }
  ngOnInit() {
    this.formPost = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
    this.onFetchPosts();
    this.isValid = this.formPost.valid;
    this.formPost.valueChanges.subscribe(() => {
      this.isValid = this.formPost.valid;
    });

    this.subscriptionError = this.postService.emitError.subscribe({
      error: (e) => this.error = e.message
    })
  }

  onCreatePost() {
    this.postService
      .sendNewPost(
        new PostModel(
          this.formPost.get('title').value,
          this.formPost.get('content').value,
          ''
        )
      )
      .subscribe({
        next: (postSended) => {
          console.log(postSended);
          this.onFetchPosts();
          this.onClearForm();
        },
        error: (error) => this.error = error.message,
      });
  }
 



  onFetchPosts() {
    this.isLoading = true;
    this.postList = [];
    this.postService
      .getAllPost()
      .subscribe({
        next: (postList) => this.postList.push(...postList),
        error: (error) => {
          console.log(error)
          this.error = error.message},
      });
    this.isLoading = false;
  }

  onClearPosts() {
    this.postList = [];
  }

  onClearForm() {
    this.formPost.reset();
  }

  onDeletePost(id: string) {
    this.postService.deleteById(id).subscribe({
      next: (deletedData) => {
        console.log(deletedData);
        this.onFetchPosts();
      },
      error: (error) => this.error = error.message,
    });
  }

  onErrorHandling(){
    this.error = null;
  }
}
