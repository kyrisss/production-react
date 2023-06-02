import { FC } from "react";
import cls from "./Navbar.module.scss";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links, {}, [])}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
          Главная
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
