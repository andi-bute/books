import { SortDirection } from './constants';

export interface DataTableState {
  sortDirection: SortDirection;
  sortKey: string;
}

export interface HeaderRowItem {
  displayName: string;
  key: string;
}
