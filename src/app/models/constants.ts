import { HeaderRowItem } from './data-table.model';

export enum SortDirection {
  ASC = 0,
  DESC = 1,
}

export const headerRowItems: HeaderRowItem[] = [
  {
    displayName: 'Title',
    key: 'title',
  },
  {
    displayName: 'Author',
    key: 'author',
  },
  {
    displayName: 'Publication date',
    key: 'published',
  },
];
