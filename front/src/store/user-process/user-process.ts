import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus as Status, NameSpace } from '../../consts';
import { AuthStatus } from '../../types/auth-status';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/user-data';

type UserProcessState = {
  authStatus: AuthStatus;
  firstName: string | undefined;
  lastName: string | undefined;
  avatarUrl: string | undefined;
};

const initialState: UserProcessState = {
  authStatus: 'Unknown',
  firstName: undefined,
  lastName: undefined,
  avatarUrl: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Omit<UserData, 'token'>>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.avatarUrl = action.payload.avatarUrl;
    },
    clearUserData: (state) => {
      state.firstName = undefined;
      state.lastName = undefined;
      state.avatarUrl = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = Status.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = Status.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = Status.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = Status.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = Status.NoAuth;
      });
  }
});

export const {setUserData, clearUserData} = userProcess.actions;
