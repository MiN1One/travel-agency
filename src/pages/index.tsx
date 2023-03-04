import Layout from "@/components/Common/Layout";
import Hero from "@/components/Hero/Hero";
import { IHomeData } from "@/interfaces/home.interface";
import { DEFAULT_LOCALE } from "@/interfaces/locales.interface";
import { fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps } from "next";
import { homeData } from '@/config/home.config';
import ToursSection from "@/components/ToursSection/ToursSection";
import ImageBanner from "@/components/ImageBanner/ImageBanner";
import PlacesOfInterest from "@/components/PlacesOfInterest/PlacesOfInterest";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Countries from '@components/Countries/Coutries';
import Faq from "@/components/Faq/Faq";
import { IPageWithLayout } from "@/interfaces/common.interface";

interface HomePageProps extends IPageWithLayout {
  homeData: IHomeData;
}

export default function HomePage(props: HomePageProps) {
  return (
    <Layout>
      <main>
        <Hero homeData={props.homeData} />
        <ToursSection 
          tours={props.homeData.tours} 
          tourTypes={props.homeData.tourTypes}
        />
        <ImageBanner banner={props.homeData.banner} />
        <PlacesOfInterest places={props.homeData.tours} />
        <PhotoGallery images={props.homeData.images} />
        <Countries countries={props.homeData.countries} />
        <Faq items={props.homeData.faq} />
      </main>
    </Layout>
  );
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