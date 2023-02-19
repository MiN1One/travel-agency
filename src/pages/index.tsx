import Layout from "@/components/Common/Layout";
import Hero from "@/components/Hero/Hero";
import { IHomeData } from "@/interfaces/home.interface";
import { DEFAULT_LOCALE } from "@/interfaces/locales.interface";
import { fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps } from "next";
import { homeData } from '@/config/home.config';
import ToursSection from "@/components/ToursSection/ToursSection";

interface HomePageProps {
  homeData: IHomeData;
}

export default function HomePage(props: HomePageProps) {
  return (
    <Layout>
      <main>
        <Hero homeData={props.homeData} />
        <ToursSection tours={props.homeData.tours} />
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || DEFAULT_LOCALE;
  return {
    props: {
      ...(await fetchMainData(locale)),
      homeData,
    },
    revalidate: 100,
  };
};