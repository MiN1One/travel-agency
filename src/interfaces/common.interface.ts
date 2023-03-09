import { SSRConfig } from "next-i18next";

export interface ILinkItem {
  title: string;
  id?: number;
  link: string;
}

export interface IFooterData {
  company_info: {
    phone_number: string;
    address: string;
    email: string;
    facebook_link: string;
    instagram_link: string;
    youtube_link: string;
    whatsapp_link: string;
    description: string;
    telegram_link: string;
  };
  menus: ILinkItem[];
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
  menus: ILinkItem[];
  company_info: {
    contact_phone_number: string;
  };
}

export interface IHeadData {
  footerData: IFooterData;
  headerData: IHeaderData;
}

export interface IPageWithLayout extends SSRConfig {
  headData: IHeadData;
};