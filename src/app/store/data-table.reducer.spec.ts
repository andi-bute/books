import { DataTableState } from '../models/data-table.model';
import { dataTableReducer } from './data-table.reducer';
import * as actions from './data-table.actions';
import { SortDirection } from '../models/constants';

describe('BooksReducers', () => {
  let initialState: DataTableState;
  initialState = {
    sortDirection: SortDirection.ASC,
    sortKey: '',
  };

  beforeEach(() => {
    initialState = { ...initialState };
  });

  it('should change state when setSortKey', () => {
    const result = dataTableReducer(
      initialState,
      actions.setSortKey({ sortKey: 'author' })
    );

    expect(result).toEqual({
      sortKey: 'author',
      sortDirection: SortDirection.ASC,
    });
  });

  it('should change sort direction when the same key is set', () => {
    const result = dataTableReducer(
      {
        sortKey: 'author',
        sortDirection: SortDirection.ASC,
      },
      actions.setSortKey({ sortKey: 'author' })
    );

    expect(result).toEqual({
      sortKey: 'author',
      sortDirection: SortDirection.DESC,
    });
  });
});
