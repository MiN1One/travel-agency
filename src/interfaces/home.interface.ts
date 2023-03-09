import { IItem } from "./common.interface";
import { ITour, ITourType } from "./tour.interface";

export interface IPlace {
  image: string;
  title: string;
  link: string;
  id: number;
  previewLink?: string;
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

  },
  tours: []
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
  images: string[];
}