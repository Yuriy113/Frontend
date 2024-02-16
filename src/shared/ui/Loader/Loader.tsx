import { classNames } from 'shared/lib/classNames/classNames';
import cls from './loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps): JSX.Element => {
    return <div className={classNames(cls.loader, {}, [className])}></div>;
};
