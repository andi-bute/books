import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { BookService } from './services/book.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { entityConfig } from './store/entity-metadata';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        StoreModule.forFeature('dataTable', {}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
        NgbModule,
        StoreModule.forRoot({}, {}),
      ],
      declarations: [AppComponent, BooksComponent, BookComponent],
      providers: [{ provide: BookService }],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to books app'
    );
  });

  it(`should have as title 'books-nx'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('books app');
  });
});
