import { IBanner } from "@/interfaces/home.interface";
import { memo } from "react";
import classes from './ImageBanner.module.scss';

interface ImageBannerProps {
  banner: IBanner;
}

function ImageBanner(props: ImageBannerProps) {

  if (!props.banner) return null;

  const { title, description, image_url } = props.banner;

  return (
    <section 
      className={classes.banner} 
      style={{ backgroundImage: `url(${image_url})` }}
    >
      <div className="container">
        <div className={classes.content}>
          <h3 className="heading heading--1 text--upc">
            {title}
          </h3>
          {description && (
            <p className="text text--high">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(ImageBanner);