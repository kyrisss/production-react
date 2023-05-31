import { classNames } from "./helpers/classNames/classNames";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <div>Hello World</div>
      <button onClick={toggleTheme}>Theme</button>
    </div>
  );
};
