import { AppRoutes } from "../app-routes";
import { ValueOf } from './value-of';

export type AppRoutes = ValueOf<ValueOf<typeof AppRoutes>>;
