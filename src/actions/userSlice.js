import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  connected: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.connected = true;
    },
    logoutSuccess: (state) => {
      state.token = "";
      state.firstName = "";
      state.lastName ="";
      state.email = "";
      state.connected = false;
      localStorage.clear();
    },
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.connected = true;
    },
    updateUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  },
});



export const { loginSuccess, logoutSuccess, setUser, updateUser} = userSlice.actions;
export default userSlice.reducer;

