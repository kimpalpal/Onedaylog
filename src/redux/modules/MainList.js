const ADD_LIST = 'MainList/ADD_LIST';
const REMOVE_LIST = 'MainList/REMOVE_LIST';
const MODIFICATION_LIST = 'MainList/MODIFICATION_LIST';
const UPDATE_LIST = 'MainList/UPDATE_LIST';

export const addList = list => ({
  type: ADD_LIST,
  payload: list
});

export const removeList = list => ({
  type: REMOVE_LIST,
  payload: list
});

export const modificationList = list => ({
  type: MODIFICATION_LIST,
  payload: list
});

export const updateList = (id, newTitle, newDetail) => ({
  type: UPDATE_LIST,
  payload: { id, newTitle, newDetail }
});

const initialState = [];

const MainList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];

    case REMOVE_LIST:
      return state.filter(list => list.uid !== action.payload);

    case MODIFICATION_LIST:
      return state.map(list => (list.uid === action.payload.uid ? action.payload : list));

    case UPDATE_LIST:
      const { id, newTitle, newDetail } = action.payload;

      return state.map(list => {
        if (list.id === id) {
          return { ...list, title: newTitle, detail: newDetail };
        }
        return list;
      });

    default:
      return state;
  }
};

export default MainList;
