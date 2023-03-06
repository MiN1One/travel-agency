import Layout from "@/components/Common/Layout";
import { IItem, IPageWithLayout } from "@/interfaces/common.interface";
import { DEFAULT_LOCALE } from "@/interfaces/locales.interface";
import { fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps } from "next";
import { tours } from "@/config/tours.config";
import ToursContainer from "@/components/ToursContainer/ToursContainer";
import { useTranslation } from "react-i18next";

interface PlacesOfInterestPageProps extends IPageWithLayout {
  tours: IItem[];
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
    const [headData] = await Promise.all([
      fetchMainData(locale),
    ]);
    return {
      props: {
        ...headData,
        tours
      },
    };
  };

export default PlacesOfInterestPage;