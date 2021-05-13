"use strict";

import Cases from "../components/pages/cases";
import Login from "../components/pages/login";

const publicRoutes = {
  rootPath: "/",
  routes: [
    {
      root: true,
      name: "login",
      path: "/",
      comp: Login,
    },
    {
      root: true,
      name: "cases",
      path: "/cases",
      comp: Cases,
    },
  ],
};

export default publicRoutes;
