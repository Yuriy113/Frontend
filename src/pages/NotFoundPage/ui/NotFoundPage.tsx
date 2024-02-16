import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './notFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps): JSX.Element => {
    const { t } = useTranslation('404');

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            <div>{t('Страница не найдена')}</div>
        </div>
    );
};

export default NotFoundPage;
