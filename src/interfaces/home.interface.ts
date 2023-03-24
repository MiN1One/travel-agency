import { ITour, ITourType } from "./tour.interface";

export interface IPlace {
  banner_image_url: string;
  title: string;
  id: number;
}

export interface ISocialLinks {
  telegram: string;
  instagram: string;
  youtTube: string;
}

export interface IBanner {
  image_url: string;
  title: string;
  description?: string;
}

export interface IFaqItem {
  question: string;
  answer: string;
}

export interface ICountry {
  title: string;
  image_url: string;
}

export interface IHero {
  company_info: {
    video_url: string;
    instagram_link: string;
    telegram_link: string;
    youtube_link: string;
  },
  tours: IPlace[]
}

export interface IHomeData {
  places: IPlace[];
  hero: IHero;
  mainTitle: string;
  socialLinks: ISocialLinks;
  tours: ITour[];
  placesOfInterest: ITour[];
  banner: IBanner;
  tourTypes: ITourType[];
  countries: ICountry[];
  faq: IFaqItem[];
  images: {
    image_url: string;
  }[];
}