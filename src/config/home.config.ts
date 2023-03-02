import { IHomeData } from "@interfaces/home.interface";
import samarkandImage from '@assets/images/samarkand.png';
import bukharaImage from '@assets/images/bukhara.png';
import charvakImage from '@assets/images/charvak.png';
import bannerImage from '@assets/images/banner.png';
import image1 from '@assets/images/1.png';
import image2 from '@assets/images/2.png';
import image3 from '@assets/images/3.png';
import image4 from '@assets/images/4.png';
import image5 from '@assets/images/5.png';
import image6 from '@assets/images/6.png';

export const homeData: IHomeData = {
  faq: [
    {
      question: 'What is your national cuisine',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      question: 'What is your national cuisine',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      question: 'What is your national cuisine',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
  ],
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
  countries: [
    '/flags/ae.png',
    '/flags/af.png',
    '/flags/ag.png',
    '/flags/ae.png',
    '/flags/al.png',
    '/flags/as.png',
    '/flags/ga.png',
    '/flags/yt.png',
    '/flags/va.png',
    '/flags/aw.png',
  ],
  banner: {
    image: bannerImage.src,
    title: 'Uzbekistan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.',
  },
  tours: [
    {
      title: 'Charvak Sea',
      link: '/tours/1',
      id: 1,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.',
      type: 'Cultural'
    },
    {
      title: 'Charvak Sea',
      link: '/tours/1',
      id: 1,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.',
      type: 'Cultural'
    },
    {
      title: 'Charvak Sea',
      link: '/tours/2',
      id: 2,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.',
      type: 'Cultural'
    },
    {
      title: 'Charvak Sea',
      link: '/tours/3',
      id: 3,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.',
      type: 'Cultural'
    },
    {
      title: 'Charvak Sea',
      link: '/tours/4',
      id: 4,
      image: charvakImage.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit quam sed placerat dapibus. Aliquam bibendum elit elit, vel maximus.',
      type: 'Cultural'
    },
  ],
  images: [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
    image4.src,
    image5.src,
    image6.src,
  ],
  socialLinks: {
    instagram: '',
    telegram: '',
    youtTube: ''
  }
}