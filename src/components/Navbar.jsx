import React from "react";
import { Link } from "react-router-dom";
import {
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
} from "../utils/consts";

export default function Navbar() {
  return (
    <header className="header__sticky">
      <div className="header__left">
        <div className="header__mega">MEGA.news</div>
        <div className="header__navigation">
          <Link to={HOME_PAGE_ROUTE} className="header__navigation-item">
            Главная
          </Link>
          <Link to={NEWS_PAGE_ROUTE} className="header__navigation-item">
            Новости
          </Link>
          <Link to={CONTACT_PAGE_ROUTE} className="header__navigation-item">
            Контакты
          </Link>
          <Link to={ABOUT_PAGE_ROUTE} className="header__navigation-item">
            О нас
          </Link>
        </div>
      </div>
      <div className="header__search">
        <input placeholder="Поиск" className="header__search-input" type="text" />
      </div>
    </header>
  );
}
