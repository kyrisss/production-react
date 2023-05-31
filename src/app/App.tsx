import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Link } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={RoutePath.main}>Главная</Link>
      <Link to={RoutePath.about}>О сайте</Link>
      <AppRouter />
    </div>
  );
};
