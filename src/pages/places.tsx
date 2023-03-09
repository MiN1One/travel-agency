import Layout from "@/components/Common/Layout";
import { IPageWithLayout } from "@/interfaces/common.interface";
import { DEFAULT_LOCALE } from "@/interfaces/locales.interface";
import { fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps } from "next";
import ToursContainer from "@/components/ToursContainer/ToursContainer";
import { useTranslation } from "react-i18next";
import { ITour } from "@/interfaces/tour.interface";
import { fetchData } from "@/utils/client-fetch.utils";

interface PlacesOfInterestPageProps extends IPageWithLayout {
  tours: ITour[];
}

function PlacesOfInterestPage(props: PlacesOfInterestPageProps) {
  const { t } = useTranslation();
  return (
    <Layout>
      <ToursContainer 
        title={t('placesOfInterest')!}
        showTypes={false}
        tours={props.tours}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PlacesOfInterestPageProps> = 
  async (ctx) => {
    const locale = ctx.locale || ctx.defaultLocale || DEFAULT_LOCALE;
    const [headData, tours] = await Promise.all([
      fetchMainData(locale),
      fetchData('/index-places-of-interest', locale)
    ]);
    return {
      props: {
        ...headData,
        tours,
      },
    };
  };

export default PlacesOfInterestPage;