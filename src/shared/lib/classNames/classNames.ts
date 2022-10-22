type Mods = Record<string, string | boolean>

export function classNames(
  baseClass: string,
  mods: Mods,
  additionalClasses: string[]
): string {
  return [
    baseClass,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
    ...additionalClasses,
  ].join(' ')
}
