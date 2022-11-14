import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../Utils/auth-service';

const userString = window.localStorage.getItem('user');
const user = userString ? JSON.parse(userString) : null;
console.log(user);

// const user = JSON.parse(userString);
const initialState = user ? { isLoggedIn: true, ...user } : { isLoggedIn: false, user: null };

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ email, nickname, password, repeatPassword }, thunkAPI) => {
    try {
      const response = await authService.signup(email, nickname, password, repeatPassword);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const user = await authService.login(email, password);
    const userString = JSON.stringify(user);
    window.localStorage.setItem('user', userString);
    return { user };
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.fulfilled]: (state) => {
      state.isLoggedIn = false;
    },
    [signup.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  }
});
const { reducer } = authSlice;
export default reducer;
