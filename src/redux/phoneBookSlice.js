import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: "",
};

const phoneBookSlice = createSlice({
  name: "phoneBook",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        ({ id }) => id !== action.payload,
      );
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  phoneBookSlice.actions;
export default phoneBookSlice.reducer;
