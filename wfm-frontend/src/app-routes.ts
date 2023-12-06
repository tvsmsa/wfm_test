export const AppRoutes = {
  Main: {
    FullPath: '/',
  },
  Login: {
    FullPath: '/login',
  },
  SignUp: {
    FullPath: '/signup',
  },
  User: {
    FullPath: '/user/:id',
  },
  SignUpLogin: {
    FullPath: '/signuplogin'
  },
  Error: {
    FullPath: '*'
  },
} as const;
