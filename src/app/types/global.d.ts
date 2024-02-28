declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    const content: React.FC<React.SVGAttributes<SVGElement>>;
    export default content;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;

declare module '*.scss';
