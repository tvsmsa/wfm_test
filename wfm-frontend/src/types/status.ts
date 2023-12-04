import { AuthStatus } from '../consts';
import { ValueOf } from './value-of';

export type FavoriteStatus = ValueOf<typeof AuthStatus>;
