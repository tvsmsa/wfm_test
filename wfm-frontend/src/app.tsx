import { Routes, Route } from 'react-router-dom';
import MainScreen from './pages/main-screen/main-screen';
import LoginScreen from './pages/login-screen/login-screen';
import ErrorScreen from './pages/error-screen/error-screen';
import PrivateRoute from './components/private-route';
import { AppRoutes } from './app-routes';
import HistoryRouter from './components/history-route';
import browserHistory from './browser-history';
import SignUpScreen from './pages/signup-screen/signup-screen';
import UserScreen from './pages/user-screen/user-screen';
import SignUpLoginScreen from './pages/signup-login-screen';
import axios from 'axios';


export default function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoutes.Main.FullPath} element={<MainScreen />} />
        <Route path={AppRoutes.Login.FullPath} element={<LoginScreen />} />
        <Route path={AppRoutes.SignUp.FullPath} element={<SignUpScreen />} />
        <Route path = {AppRoutes.UserFull.FullPath} element={<SignUpLoginScreen />} />
        <Route path={AppRoutes.User.FullPath} element={
          <PrivateRoute>
            <UserScreen />
          </PrivateRoute>
        }
        />
        <Route path={AppRoutes.Error.FullPath} element={<ErrorScreen errorStatusCode={404} />} />
      </Routes>
    </HistoryRouter>
  );
}
