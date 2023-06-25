import { useTranslation } from 'react-i18next';
import Page from 'widgets/Page/Page';

const Page404 = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <h1>{t('Page not found')}</h1>
        </Page>
    );
};

export default Page404;
