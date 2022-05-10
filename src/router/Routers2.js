import Page2 from "../pages/page2";
import Detail from "../pages/page2/Detail";

export const page2Routers = [
  {
    path: "/",
    exact: true,
    children: <Page2 />,
  },

  {
    path: "/:id",
    exact: false,
    children: <Detail />,
  },
];
