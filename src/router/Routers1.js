import Page1 from "../pages/page1";
import Detail1 from "../pages/page1/Detail1";
import Detail2 from "../pages/page1/Detail2";

export const page1Routers = [
  {
    path: "/",
    exact: true,
    children: <Page1 />,
  },
  {
    path: "/detail1",
    exact: false,
    children: <Detail1 />,
  },
  {
    path: "/detail2",
    exact: false,
    children: <Detail2 />,
  },
];
