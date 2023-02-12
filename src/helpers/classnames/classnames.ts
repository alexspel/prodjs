export type TMods = Record<string, boolean | string>;

export interface IClassNames {
    cls: string;
    mods: TMods;
    additional: string[];
}

export function classNames({ cls, mods, additional }: IClassNames): string {

    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(" ");
}