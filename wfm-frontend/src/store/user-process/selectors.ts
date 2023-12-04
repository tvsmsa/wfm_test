import { NameSpace } from '../../consts';
import { AuthStatus } from '../../types/auth-status';
import { State } from '../../types/state';

export const getUserFirstName = (state: State): string | undefined => state[NameSpace.User].firstName;
export const getUserLastName = (state: State): string | undefined => state[NameSpace.User].lastName;
export const getUserAvatar = (state: State): string | undefined => state[NameSpace.User].avatarUrl;
export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
