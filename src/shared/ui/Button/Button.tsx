import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = ThemeButton.CLEAR,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
