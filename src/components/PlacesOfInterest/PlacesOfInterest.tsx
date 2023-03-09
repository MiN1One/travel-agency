import { memo } from "react";
import { useTranslation } from "next-i18next";
import SectionSkeleton from "../SectionSkeleton/SectionSkeleton";
import { ITour } from "@/interfaces/tour.interface";
import ImageCardExpanded from "../ImageCardExpanded/ImageCardExpanded";
import classes from './PlacesOfInterest.module.scss';
import classNames from "classnames";

interface PlacesOfInterestProps {
  places: ITour[];
}

function PlacesOfInterest({ places }: PlacesOfInterestProps) {
  const { t } = useTranslation();

  const placeEls = places.map((item, index) => {
    return (
      <div className={classes.item} key={index}>
        <ImageCardExpanded item={item} />
      </div>
    );
  }); 

  return (
    <SectionSkeleton
      className={classes.places}
      title={t('placeOfInterest')!}
      contentClassName={classes.content}
    >
      <div className={classNames(classes.list, 'hideScroll')}>
        {placeEls}
      </div>
    </SectionSkeleton>
  );
}

export default memo(PlacesOfInterest);