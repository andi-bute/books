import { Action, createReducer, on } from '@ngrx/store';
import * as DataTableActions from './data-table.actions';
import { DataTableState } from 'src/app/models/data-table.model';
import { SortDirection } from '../models/constants';

export const INITIAL_STATE: DataTableState = {
  sortDirection: SortDirection.ASC,
  sortKey: '',
};

export const dataTableFeatureKey = 'dataTable';

export const dataTableReducer = createReducer(
  INITIAL_STATE,
  on(DataTableActions.setSortKey, (state, { sortKey }) => {
    sortKey = sortKey?.toLowerCase();

    let sortDirection;
    if (sortKey !== state.sortKey) {
      sortDirection = SortDirection.ASC;
    } else {
      sortDirection = toggleSortDirection(state.sortDirection);
    }
    return {
      ...state,
      sortKey,
      sortDirection,
    };
  }),

  on(DataTableActions.resetDataTableStore, (state): DataTableState => {
    return {
      ...state,
      ...INITIAL_STATE,
    };
  })
);

export function DataTableReducer(state: DataTableState, action: Action) {
  return dataTableReducer(state, action);
}

function toggleSortDirection(sortDirection: SortDirection): SortDirection {
  switch (sortDirection) {
    case SortDirection.ASC:
      return SortDirection.DESC;
    case SortDirection.DESC:
      return SortDirection.ASC;
    default:
      return SortDirection.ASC;
  }
}
