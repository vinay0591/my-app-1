import { createSlice } from "@reduxjs/toolkit";
import { nameList } from "./Data";

const userSlice = createSlice({
  name: "pockemon",
  initialState: nameList,
  reducers: {
    addpockemon: (state, action) => {
      //console.log(action);
      state.push(action.payload);
    },
    updatepockemon: (state, action) => {
      const { id, name, height, weight, ability, category, description } =
        action.payload;
      const listupdate = state.find((list) => list.id == id);
      if (listupdate) {
        listupdate.name = name;
        listupdate.height = height;
        listupdate.weight = weight;
        listupdate.ability = ability;
        listupdate.category = category;
        listupdate.description = description;
      }
    },
    deletepockemon: (state, action) => {
      const { id } = action.payload;
      const listupdate = state.find((list) => list.id == id);
      if (listupdate) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addpockemon, updatepockemon, deletepockemon } =
  userSlice.actions;
export default userSlice.reducer;
