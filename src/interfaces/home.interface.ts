import { IItem } from "./common.interface";
import { ITourType } from "./tour.interface";

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
  image: string;
  title: string;
  description?: string;
}

export interface IHomeData {
  places: IPlace[];
  mainTitle: string;
  socialLinks: ISocialLinks;
  tours: IItem[];
  banner: IBanner;
  tourTypes: ITourType[];
}