const initialState = {
  contacts: [],
  filter: "",
};

const ADD_CONTACT = "phoneBook/addContact";
const DELETE_CONTACT = "phoneBook/deleteContact";
const UPDATE_FILTER = "phoneBook/updateFilter";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

export const updateFilter = (filter) => ({
  type: UPDATE_FILTER,
  payload: filter,
});

export default function phoneBookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== action.payload),
      };
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
