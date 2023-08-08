import { createAction, props } from '@ngrx/store';

enum Actions {
  SET_SORT_KEY = '[Data Table] Set Sort Key',
  RESET_DATATABLE_STORE = '[Data Table] Reset Store',
}

export const setSortKey = createAction(
  Actions.SET_SORT_KEY,
  props<{ sortKey: string }>()
);
export const resetDataTableStore = createAction(Actions.RESET_DATATABLE_STORE);
