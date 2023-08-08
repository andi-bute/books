import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService extends EntityCollectionServiceBase<Book> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Book', serviceElementsFactory);
  }
}
