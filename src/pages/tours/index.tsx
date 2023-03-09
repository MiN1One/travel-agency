import Layout from "@/components/Common/Layout";
import ToursContainer from "@/components/ToursContainer/ToursContainer";
import { IPageWithLayout } from "@/interfaces/common.interface";
import { DEFAULT_LOCALE } from "@/interfaces/locales.interface";
import { fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps } from "next";
import { ITour, ITourType } from "@/interfaces/tour.interface";
import { fetchData } from "@/utils/client-fetch.utils";

interface ToursPageProps extends IPageWithLayout {
  tours: ITour[];
  tourTypes: ITourType[];
}

function ToursPage(props: ToursPageProps) {
  return (
    <Layout>
      <main>
        <ToursContainer 
          tours={props.tours} 
          tourTypes={props.tourTypes}
        />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ToursPageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || DEFAULT_LOCALE;
  const [headData, tours, tourTypes] = await Promise.all([
    fetchMainData(locale),
    fetchData('/tours', locale),
    fetchData('/tour-categories', locale),
  ]);

  console.log({ tourTypes })

  return {
    props: {
      ...headData,
      tours: tours.results || [],
      tourTypes,
    },
  };
};

export default ToursPage;
