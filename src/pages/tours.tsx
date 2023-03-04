import Layout from "@/components/Common/Layout";
import ToursContainer from "@/components/ToursContainer/ToursContainer";
import { IItem, IPageWithLayout } from "@/interfaces/common.interface";
import { DEFAULT_LOCALE } from "@/interfaces/locales.interface";
import { fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps } from "next";
import { tours } from '@/config/tours.config';
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

interface ToursPageProps extends IPageWithLayout {
  tours: IItem[];
}

function ToursPage(props: ToursPageProps) {
  return (
    <Layout>
      <main>
        <Breadcrumbs 
          items={[{ value: 'tours', link: '/tours' }]}
        />
        <ToursContainer 
          tours={props.tours} 
          tourTypes={[]}
        />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ToursPageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || DEFAULT_LOCALE;
  const [headData] = await Promise.all([
    fetchMainData(locale),
  ]);

  return {
    props: {
      ...headData,
      tours,
    }
  };
};

export default ToursPage;