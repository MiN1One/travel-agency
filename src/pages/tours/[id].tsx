import Layout from '@/components/Common/Layout';
import { IItem, IPageWithLayout } from '@interfaces/common.interface';
import { GetStaticPaths, GetStaticProps } from 'next';
import { DEFAULT_LOCALE } from '@/interfaces/locales.interface';
import { fetchMainData } from '@/utils/fetch.utils';
import { tour } from '@/config/tour.config';
import SingleTour from '@/components/SingleTour/SingleTour';
import { tours } from '@/config/tours.config';

interface SingleTourPageProps extends IPageWithLayout {
  tour: IItem;
  recommendedTours?: IItem[];
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

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const promises = ctx.locales?.map(locale => {
  });

  return {
    paths: [
      { params: { id: '0' } }
    ],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<SingleTourPageProps> = async (ctx) => { 
  const locale = ctx.locale || ctx.defaultLocale || DEFAULT_LOCALE;
  const [headData] = await Promise.all([
    fetchMainData(locale),
  ]);
  return {
    props: {
      ...headData,
      tour,
      recommendedTours: tours
    }
  };
}

export default SingleTourPage;