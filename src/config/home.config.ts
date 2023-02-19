import { IHomeData } from "@interfaces/home.interface";
import samarkandImage from '@assets/images/samarkand.png';
import bukharaImage from '@assets/images/bukhara.png';
import charvakImage from '@assets/images/charvak.png';

export const homeData: IHomeData = {
  places: [
    {
      title: 'Bukhara',
      image: bukharaImage.src,
      id: 0,
      link: '/places/bukhara',
      previewLink: '/places/bukhara'
    },
    {
      title: 'Kokand',
      image: '',
      id: 1,
      link: '/places/Kokand',
      previewLink: '/places/Kokand'
    },
    {
      title: 'Khiva',
      image: '',
      id: 2,
      link: '/places/Khiva',
      previewLink: '/places/Khiva'
    },
    {
      title: 'Samarkand',
      image: samarkandImage.src,
      id: 3,
      link: '/places/Samarkand',
      previewLink: '/places/Samarkand'
    },
  ],
  mainTitle: 'Uzbekistan',
  tourTypes: [
    {
      id: 1,
      title: 'Adventure'
    },
    {
      id: 2,
      title: 'Agricultural'
    },
    {
      id: 3,
      title: 'Business'
    },
    {
      id: 4,
      title: 'Cultural'
    },
    {
      id: 5,
      title: 'Religious'
    },
    {
      id: 6,
      title: 'Silk Road'
    },
  ],
  tours: [
    {
      title: 'Charvak Sea',
      link: '/tours/1',
      id: 1,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.'
    },
    {
      title: 'Charvak Sea',
      link: '/tours/1',
      id: 1,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.'
    },
    {
      title: 'Charvak Sea',
      link: '/tours/2',
      id: 2,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.'
    },
    {
      title: 'Charvak Sea',
      link: '/tours/3',
      id: 3,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.'
    },
    {
      title: 'Charvak Sea',
      link: '/tours/4',
      id: 4,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.'
    },
  ],
  socialLinks: {
    instagram: '',
    telegram: '',
    youtTube: ''
  }
}