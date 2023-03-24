import Layout from '@/components/Common/Layout';
import { IPageWithLayout } from '@interfaces/common.interface';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { DEFAULT_LOCALE } from '@/interfaces/locales.interface';
import { fetchMainData } from '@/utils/fetch.utils';
import SingleTour from '@/components/SingleTour/SingleTour';
import { ITour, ITourExpanded } from '@/interfaces/tour.interface';
import { fetchData } from '@/utils/client-fetch.utils';

interface SingleTourPageProps extends IPageWithLayout {
  tour: ITourExpanded;
  recommendedTours?: ITour[];
}

function SingleTourPage(props: SingleTourPageProps) {
  return (
    <Layout>
      <SingleTour 
        tour={props.tour}
        recommendedTours={props.recommendedTours}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<
  SingleTourPageProps
> = async (ctx) => { 
  const locale = ctx.locale || ctx.defaultLocale || DEFAULT_LOCALE;
  const [headData, tour] = await Promise.all([
    fetchMainData(locale),
    fetchData(`tours/${ctx.params?.id}`, locale)
  ]);
  console.log(tour?.tour?.images)
  return {
    props: {
      ...headData,
      tour: tour?.tour || null,
      recommendedTours: tour?.related || null
    }
  };
}

export default SingleTourPage;