import { FC } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import ThemeSwitcherIcon from "shared/assets/icons/themeSwitcher.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      <ThemeSwitcherIcon className={cls.icon} />
    </Button>
  );
};
