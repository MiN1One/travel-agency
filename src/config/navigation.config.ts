import { IHeaderData, ILinkItem } from "@/interfaces/common.interface";

export const navigationItems: ILinkItem[] = [
  {
    link: '/service',
    title: 'Service',
    id: 1,
  },
  {
    link: '/about-us',
    title: 'About us',
    id: 2,
  },
  {
    link: '/for-you',
    title: 'For tourists',
    id: 3
  },
  {
    link: '/places',
    title: 'Places of interest',
    id: 4
  },
];

export const headerData: IHeaderData = {
  links: navigationItems,
  phoneNumber: '+998 99 453 23 35'
};