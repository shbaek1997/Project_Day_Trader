import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../Utils/auth-service';

const findUser = async () => {
  const user = await authService.checkUser();
  return user;
};
const user = findUser();
const initialState = user ? { isLoggedIn: true, ...user } : { isLoggedIn: false, user: null };
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

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ email, nickname, password, repeatPassword }, thunkAPI) => {
    try {
      const response = await authService.signup(email, nickname, password, repeatPassword);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const response = await authService.login(email, password);
    const { data } = response;
    return { user: data };
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

const { reducer } = authSlice;
export default reducer;
