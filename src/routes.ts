import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Ministries } from "./pages/Ministries";
import { Stewardship } from "./pages/Stewardship";
import { WatchLive } from "./pages/WatchLive";
import { Events } from "./pages/Events";
import { Visit } from "./pages/Visit";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "ministries", Component: Ministries },
      { path: "stewardship", Component: Stewardship },
      { path: "watch-live", Component: WatchLive },
      { path: "events", Component: Events },
      { path: "visit", Component: Visit },
      { path: "contact", Component: Contact },
    ],
  },
]);