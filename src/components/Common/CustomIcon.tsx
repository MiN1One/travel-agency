import sprite from '@assets/images/sprite.svg';
import { SVGProps } from 'react';

interface CustomIconProps extends SVGProps<SVGSVGElement> {
  iconName: string;
}

function CustomIcon({ iconName, ...restProps }: CustomIconProps) {
  return (
    <svg {...restProps}>
      <use xlinkHref={`${sprite}#${iconName}`} />
    </svg>
  );
}

export default CustomIcon;