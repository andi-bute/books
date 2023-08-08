import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataTableState } from '../models/data-table.model';
import * as fromDataTable from './data-table.reducer';

export const selectDataTableState = createFeatureSelector<DataTableState>(
  fromDataTable.dataTableFeatureKey
);

export const selectSortDirection = createSelector(
  selectDataTableState,
  (state: DataTableState) => state.sortDirection
);
export const selectSortKey = createSelector(
  selectDataTableState,
  (state: DataTableState) => state.sortKey
);
