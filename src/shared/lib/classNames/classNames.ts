type Mods = Record<string, boolean | string>;

const formatObject = (obj: Mods) => {
  return Object.entries(obj)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className);
};

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [cls, ...additional.filter(Boolean), ...formatObject(mods)].join(" ");
}
