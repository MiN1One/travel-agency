import { IHomeData } from "@interfaces/home.interface";
import samarkandImage from '@assets/images/samarkand.png';
import bukharaImage from '@assets/images/bukhara.png';

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
  socialLinks: {
    instagram: '',
    telegram: '',
    youtTube: ''
  }
}