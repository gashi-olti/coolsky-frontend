import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@/components/Layout';
import Weather from '@/components/Weather';

export default function Home() {
  return (
    <Layout>
      <Weather />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: any }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
