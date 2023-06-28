const ADD_LIST = 'MainList/ADD_LIST';
const REMOVE_LIST = 'MainList/REMOVE_LIST';
const Modification_LIST = 'MainList/Modification_LIST';
const UPDATE_LIST = 'MainList/UPDATE_LIST';
export const addList = list => ({
  type: ADD_LIST,
  payload: list
});

export const removeList = list => ({
  type: REMOVE_LIST,
  payload: list
});

export const ModificationList = list => ({
  type: Modification_LIST,
  payload: list
});
export const updataList = (id, newTitle, newDetail) => ({
  type: UPDATE_LIST,
  payload: { id, newTitle, newDetail }
});
const initialState = [
  {
    id: crypto.randomUUID(),
    title: '하루일과 기록',
    detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae aliquam asperiores
  labore, ratione recusandae enim odio veritatis explicabo vero quos magni alias animi
  adipisci dolore illo similique, aut tempora!Lorem ipsum dolor sit, amet consectetur
  adipisicing elit. Ipsam quae aliquam asperiores labore, ratione recusandae enim odio
  veritatis explicabo vero quos magni alias animi adipisci dolore illo similique, aut
  tempora!`,
    isDone: false
  }
];

const MainList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    case REMOVE_LIST:
      return state.filter(list => list.id !== action.payload);
    case Modification_LIST:
      return state.map(list => (list.id === action.payload.id ? action.payload : list));
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
