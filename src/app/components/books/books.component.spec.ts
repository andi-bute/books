import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from 'src/app/store/entity-metadata';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/services/book.service';
import { SortDirection } from 'src/app/models/constants';
import { Book } from 'src/app/models/book.model';

const booksMock: Book[] = [
  {
    id: '1',
    title: 'a',
    author: 'a',
    published: new Date('2010-01-01T00:00:00.000Z'),
  },
  {
    id: '2',
    title: 'b',
    author: 'b',
    published: new Date('2011-01-01T00:00:00.000Z'),
  },
  {
    id: '3',
    title: 'c',
    author: 'c',
    published: new Date('2009-01-01T00:00:00.000Z'),
  },
];
describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('dataTable', {}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
        NgbModule,
        StoreModule.forRoot({}, {}),
      ],
      declarations: [BooksComponent],
      providers: [{ provide: BookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort entities', function (done) {
    let books = { ...booksMock };
    let sortKey = 'title';
    let sortDirection = SortDirection.ASC;
    books = component.sortEntities(sortDirection, sortKey, booksMock);
    expect(books[0].title).toEqual('a');

    sortDirection = SortDirection.DESC;
    books = component.sortEntities(sortDirection, sortKey, books);
    expect(books[0].title).toEqual('c');

    sortKey = 'published';
    sortDirection = SortDirection.ASC;
    books = component.sortEntities(sortDirection, sortKey, books);
    expect(books[0].title).toEqual('c');
    done();
  });
});
