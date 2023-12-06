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

function getUserFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_DATA) || '');
  } catch (error) {
    if (error instanceof Error) throw Error(error.message);
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState: getUserFromLocalStorage() ?? initialState,
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
