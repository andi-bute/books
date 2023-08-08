import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatestWith, map } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { SortDirection, headerRowItems } from 'src/app/models/constants';
import { HeaderRowItem } from 'src/app/models/data-table.model';
import { BookService } from 'src/app/services/book.service';
import * as dataTableActions from 'src/app/store/data-table.actions';
import * as dataTableSelectors from 'src/app/store/data-table.selectors';

@Component({
  selector: 'app-books-list',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  loading$: Observable<boolean>;
  books$: Observable<Book[]>;
  sortDirection$!: Observable<SortDirection>;
  sortKey$!: Observable<string>;
  headerRowItems: HeaderRowItem[] = headerRowItems;

  constructor(private store: Store, private bookService: BookService) {
    this.books$ = bookService.filteredEntities$;
    this.loading$ = bookService.loading$;
  }

  ngOnInit() {
    this.bookService.getAll();
    this.sortKey$ = this.store.select(dataTableSelectors.selectSortKey);
    this.sortDirection$ = this.store.select(
      dataTableSelectors.selectSortDirection
    );

    //combine the relevent observables used for sorting
    this.combineDataSources();
  }

  private combineDataSources() {
    this.sortDirection$
      .pipe(
        combineLatestWith(this.sortKey$),
        map(([sortDirection, sortKey]) => {
          return { sortDirection, sortKey };
        })
      )
      .pipe(
        combineLatestWith(this.books$),
        map(([sortData, books]) => {
          this.sortEntities(
            sortData?.sortDirection,
            sortData?.sortKey as keyof Book,
            books
          );
        })
      )
      .subscribe();
  }

  sortEntities(sortDirection: SortDirection, sortKey: string, books: Book[]) {
    //no sorting required if no key given
    if (!sortKey) return books;

    // get the key type to be used for accessing entity properties;
    const sortKeyType = sortKey as keyof Book;
    if (sortKeyType) {
      if (sortKeyType === 'published') {
        books.sort(
          (a, b) =>
            new Date(a[sortKeyType]).getTime() -
            new Date(b[sortKeyType]).getTime()
        );
      } else {
        books.sort((a, b) => a[sortKeyType].localeCompare(b[sortKeyType]));
      }
      if (sortDirection === SortDirection.DESC) {
        books.reverse();
      }
    }
    return books;
  }

  public onSort(key: string): void {
    this.store.dispatch(dataTableActions.setSortKey({ sortKey: key }));
  }

  public get SortDirectionEnum() {
    return SortDirection;
  }
}
