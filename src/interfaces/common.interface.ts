
export interface ILinkItem {
  title: string;
  id?: number;
  link: string;
}

export interface IFooterData {
  
}

export interface IItem {
  title: string;
  link: string;
  image: string;
  type: string;
  description?: string;
  id: number;
}

export interface IHeaderData {
  links: ILinkItem[];
  phoneNumber: string;
}

export interface IHeadData {
  footerData: IFooterData;
  headerData: IHeaderData;
}