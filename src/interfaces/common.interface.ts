
export interface ILinkItem {
  title: string;
  id?: number;
  link: string;
}

export interface IFooterData {
  
}

export interface IHeaderData {
  links: ILinkItem[];
  phoneNumber: string;
}

export interface IHeadData {
  footerData: IFooterData;
  headerData: IHeaderData;
}