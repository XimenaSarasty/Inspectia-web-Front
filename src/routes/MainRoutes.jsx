import { lazy } from "react";

const AuthLogin = Loadable(lazy(() => import('../views/pages/auth-forms/AuthLogin')));


const MainRoutes = {
  path: "/",
  element: <Home />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
    // {
    //   path: "Register",
    //   element: < />,
    // },
  ],
};

export default MainRoutes;