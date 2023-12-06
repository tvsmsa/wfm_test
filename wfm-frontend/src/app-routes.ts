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
  UserFull: {
    FullPath: '/userfull'
  },
  Error: {
    FullPath: '*'
  },
} as const;
