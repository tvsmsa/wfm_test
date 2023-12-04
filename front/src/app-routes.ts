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
  Error: {
    FullPath: '*'
  },
} as const;
