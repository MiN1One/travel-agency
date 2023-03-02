import { IFooterData } from "@/interfaces/common.interface";

export const footerData: IFooterData = {
  socialLinks: {
    instagram: '/',
    telegram: '/',
    whatsapp: '/',
    youtube: '/',
    facebook: '/',
  },
  companyInfo: {
    phoneNumber: '+998 99 453 23 35',
    email: 'tours@tour.com',
    address: 'Somewhere in the world, 99',
  },
  links: [
    {
      title: 'Service',
      link: '/service',
    },
    {
      title: 'For tourists',
      link: '/tours',
    },
    {
      title: 'About us',
      link: '/about-us',
    },
    {
      title: 'Places of interest',
      link: '/places',
    },
  ]
};