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
import { fetchData } from "@/utils/client-fetch.utils";

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
        <PlacesOfInterest places={props.homeData.placesOfInterest} />
        <PhotoGallery images={props.homeData.images} />
        <Countries countries={props.homeData.countries} />
        <Faq items={props.homeData.faq} />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || DEFAULT_LOCALE;
  const [
    headData, 
    faq, 
    tours,
    tourTypes,
    countries,
    placesOfInterest,
    aboutUs
  ] = await Promise.all([
    fetchMainData(locale),
    fetchData('/common-questions', locale),
    fetchData('/index-tours', locale),
    fetchData('/index-tour-categories', locale),
    fetchData('/countries', locale),
    fetchData('/index-places-of-interest', locale),
    fetchData('/about-us', locale),
  ]);
  return {
    props: {
      ...headData,
      homeData: {
        ...homeData,
        faq,
        tours,
        tourTypes,
        countries,
        placesOfInterest,
        banner: aboutUs[0] || {}
      },
    },
    revalidate: 100,
  };
};