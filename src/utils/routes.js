import AboutPage from "../pages/AboutPage";
import ArticlePage from "../pages/ArticlePage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import NotFoundPage from "../pages/NotFoundPage";

import {
  HOME_PAGE_ROUTE,
  ARTICLE_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
} from "./consts";

export const routes = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage,
  },
  {
    path: ABOUT_PAGE_ROUTE,
    element: AboutPage,
  },
  {
    path: NEWS_PAGE_ROUTE,
    element: NewsPage,
  },
  {
    path: CONTACT_PAGE_ROUTE,
    element: ContactPage,
  },
  {
    path: ARTICLE_PAGE_ROUTE,
    element: ArticlePage,
  },
  
  {
    path: "*",
    element: NotFoundPage,
  },
  
];