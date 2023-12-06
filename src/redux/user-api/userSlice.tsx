import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const AUTH_DATA = 'fitness-pro';

interface IUser {
  email: string | null;
  id: string | null;
}


const initialState: IUser = {
  email: null,
  id: null,
};

interface IPayload {
  email: string | null;
  id: string | null;
}

// function getUserFromLocalStorage() {
//   try {
//     return JSON.parse(localStorage.getItem(AUTH_DATA) || '');
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

const userSlice = createSlice({
  name: 'user',
  // initialState: getUserFromLocalStorage() ?? initialState,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IPayload>) {
      const payload = action.payload ?? initialState;

      state.email = payload.email;
      state.id = payload.id;

      localStorage.setItem(AUTH_DATA, JSON.stringify(state));
    },

    removeUser(state) {
      state.email = null;
      state.id = null;
      localStorage.removeItem(AUTH_DATA);
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
