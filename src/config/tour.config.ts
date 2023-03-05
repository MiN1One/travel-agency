import { IItem } from "@/interfaces/common.interface";
import image1 from '@assets/images/bukhara.png';
import image4 from '@assets/images/samarkand.png';
import image2 from '@assets/images/1.png';
import image3 from '@assets/images/2.png';

export const tour: IItem = {
  description: 'This Pearl of Tian Shan Mountains has appeared quite recently. The rock fill dam of 168 meter height was made in 1970. Confluent of mountain rivers of Pskem, Kok-Su and Chatkal created the wonderful mountain lake – Charvak Reservoir, which blue water attracts everyone in hot summer days.<br /><br />Formerly, some villages, mounds, evidences of primitive people sites, petroglyphs and other historical attractions has existed on the site of the lake bottom. But after the destructive earthquake of 1966, when entire USSR made every effort to rebuild Tashkent, it was the period of acute shortage of cheap and ecological electricity.<br /><br />Therefore the government decided to create the Charvak Hydropower Station (they didn’t have another more convenient place for this purpose). Archeologists and historians have conducted researches of every object, made photos and fixed over 150 monuments of this area. Today, 40 years later, major part of these attractions is under layers of mud and sludge.',
  title: 'Charvak sea',
  images: [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
  ],
  id: 0,
  link: '/tours/0',
  price: '659 $',
  image: '',
  type: 'mountains'
};