import Layout from "@/components/Common/Layout";
import { IPageWithLayout } from "@/interfaces/common.interface";
import { DEFAULT_LOCALE } from "@/interfaces/locales.interface";
import { fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps } from "next";
import ToursContainer from "@/components/ToursContainer/ToursContainer";
import { useTranslation } from "react-i18next";
import { IPaginatedTours } from "@/interfaces/tour.interface";
import { fetchData } from "@/utils/client-fetch.utils";

interface PlacesOfInterestPageProps extends IPageWithLayout {
  tours: IPaginatedTours;
}

function PlacesOfInterestPage(props: PlacesOfInterestPageProps) {
  const { t } = useTranslation();
  return (
    <Layout>
      <ToursContainer 
        title={t('placeOfInterest')!}
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
      fetchData('/tours?is_high_interest=true', locale)
    ]);
    console.log(tours)
    return {
      props: {
        ...headData,
        tours,
      },
    };
  };

export default PlacesOfInterestPage;