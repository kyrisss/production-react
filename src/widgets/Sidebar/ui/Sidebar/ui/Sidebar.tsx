import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useTheme } from "app/providers/ThemeProvider";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((p) => !p);

  const { theme } = useTheme();

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button theme={theme} onClick={onToggle}>
        Toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* langswitcher */}
      </div>
    </div>
  );
};
