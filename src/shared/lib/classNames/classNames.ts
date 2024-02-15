type Mods = Record<string, boolean | string>;

type additionalType = string | undefined;

export function classNames(cls: string | undefined, mods: Mods = {}, additional: additionalType[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}

classNames('app', { selected: false }, ['active']);
