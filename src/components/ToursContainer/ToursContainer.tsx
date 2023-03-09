import { ITour, ITourType } from "@/interfaces/tour.interface";
import { memo, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import ImageCard from "../ImageCard/ImageCard";
import classes from "./ToursContainer.module.scss";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import TagsSlider from "../TagsSlider/TagsSlider";
import Pagination from "../Pagination/Pagination";
import classNames from "classnames";

interface ToursContainerProps {
  tours: ITour[];
  tourTypes?: ITourType[];
  bradcrumbValue?: string;
  showTypes?: boolean;
  title?: string;
}

function ToursContainer(props: ToursContainerProps) {
  const {
    tours,
    tourTypes = [],
    bradcrumbValue = 'tours',
    showTypes = true,
    title,
  } = props;
  const { t } = useTranslation();
  const [activePage, setActivePage] = useState(1);
  const [activeType, setActiveType] = useState<string | null>(null);

  const tourEls = tours.map((tour, index) => {
    return <ImageCard item={tour} key={tour.id ?? index} />;
  });

  const types = useMemo(() => {
    if (!showTypes) return [];
    if (tourTypes.length) {
      return tourTypes.map(({ title }) => title);
    }
    return tours.map(({ tour_category_title }) => tour_category_title!);
  }, [tourTypes, tours, showTypes]);

  return (
    <section className={classNames(
      classes.tours,
      { [classes.withTypes]: showTypes }
    )}>
      <div className="container">
        <Breadcrumbs items={[{
          value: bradcrumbValue as any,
          link: "/tours"
        }]} />
        <div className={classes.head}>
          <h1 className="heading heading--1 text--dark text--upc text-overflow">
            {title || t('tours')}
          </h1>
          {showTypes && types.length > 0 && (
            <div className={classes.tags}>
              <TagsSlider
                items={types}
                onClickItem={setActiveType}
                activeItem={activeType || ''}
              />
            </div>
          )}
        </div>
        <div className={classes.list}>
          {tourEls}
        </div>
        <div className={classes.pagination}>
          <Pagination 
            pagesCount={10}
            activePage={activePage}
            onPageChange={setActivePage}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(ToursContainer);
