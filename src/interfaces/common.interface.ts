import { SSRConfig } from "next-i18next";

export interface ILinkItem {
  title: string;
  id?: number;
  link: string;
}

export interface IFooterData {
  companyInfo: {
    phoneNumber: string;
    address: string;
    email: string;
  };
  links: ILinkItem[];
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
    whatsapp: string;
    telegram: string;
  };
}

export interface IItem {
  title: string;
  link: string;
  image: string;
  type: string;
  description?: string;
  id: number;
  images?: string[];
  price?: string;
}

export interface IHeaderData {
  links: ILinkItem[];
  phoneNumber: string;
}

export interface IHeadData {
  footerData: IFooterData;
  headerData: IHeaderData;
}

export interface IPageWithLayout extends SSRConfig {
  headData: IHeadData;
};