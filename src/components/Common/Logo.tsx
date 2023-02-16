import { DetailedHTMLProps, HTMLAttributes } from "react";
import logo from '@assets/images/logo.svg';

interface LogoProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLElement>, 
  HTMLElement
> {
  src?: string;
  alt?: string;
}

function Logo({ src, alt, ...restProps }: LogoProps) {
  return (
    <figure {...restProps}>
      <img 
        alt={alt || 'Logo'} 
        width="100%" 
        src={src || logo} 
        height="auto"
      />
    </figure>
  );
}

export default Logo;