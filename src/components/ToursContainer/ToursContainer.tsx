import { IItem } from "@/interfaces/common.interface";
import { ITourType } from "@/interfaces/tour.interface";
import { memo, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import ImageCard from "../ImageCard/ImageCard";
import classes from "./ToursContainer.module.scss";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import TagsSlider from "../TagsSlider/TagsSlider";
import Pagination from "../Pagination/Pagination";

interface ToursContainerProps {
  tours: IItem[];
  tourTypes?: ITourType[];
}

function ToursContainer(props: ToursContainerProps) {
  const { tours, tourTypes = [] } = props;
  const { t } = useTranslation();
  const [activePage, setActivePage] = useState(1);
  const [activeType, setActiveType] = useState<string | null>(null);

  const tourEls = tours.map((tour, index) => {
    return <ImageCard item={tour} key={tour.id ?? index} />;
  });

  const types = useMemo(() => {
    if (tourTypes.length) {
      return tourTypes.map(({ title }) => title);
    }
    return tours.map(({ type }) => type);
  }, [tourTypes, tours]);

  return (
    <section className={classes.tours}>
      <div className="container">
        <Breadcrumbs items={[{ value: "tours", link: "/tours" }]} />
        <div className={classes.head}>
          <h1 className="heading heading--1 text--dark text--upc">
            {t('tours')}
          </h1>
          <div className={classes.tags}>
            <TagsSlider
              items={types}
              onClickItem={setActiveType}
              activeItem={activeType || ''}
            />
          </div>
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
