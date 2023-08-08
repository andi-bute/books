import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    published: new FormControl(''),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', [Validators.required]],
      published: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.bookForm.invalid) {
      return;
    }
    const newBook: Book = {
      title: this.bookForm.get('title')?.value,
      author: this.bookForm.get('author')?.value,
      published: this.bookForm.get('published')?.value,
      //hacky workaround for now, need to do a bit of refactoring to make the models and the bookService play nice with possible null ids
      //TODO: fix this
      id: Math.round(Math.random() * 10000).toString(),
    };

    //this makes the request to the json-server, but POST to /book seems to 404, so we can add to cache for now to see the ui work
    this.bookService.add(newBook).subscribe(
      (book: Book) => {
        this.bookService.addOneToCache(newBook);
        this.onReset();
      },
      (errorResponse) => {
        this.bookForm.controls['title'].setErrors({
          backend: errorResponse.error,
        });
      }
    );
    // this will help us see the state changes reflected in UI despite the failed json-server request
    this.bookService.addOneToCache(newBook);
  }

  onReset(): void {
    this.submitted = false;
    this.bookForm.reset();
  }
}
