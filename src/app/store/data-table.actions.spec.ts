// import { booksListMock } from './books.mocks';
import * as actions from './data-table.actions';

describe('DataTableActions', () => {
  describe('setSortKey', () => {
    it('should create an action to set the sort key', () => {
      const expectedAction = {
        type: actions.setSortKey.type,
      };
      const action = actions.setSortKey({ sortKey: 'author' });
      expect(action.type).toEqual(expectedAction.type);
    });
  });

  it('should create an action to set the sort key', () => {
    const expectedAction = {
      type: actions.setSortKey.type,
    };
    const action = actions.setSortKey({ sortKey: 'author' });
    expect(action.type).toEqual(expectedAction.type);
  });
});
