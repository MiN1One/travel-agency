import { IPaginatedTours, ITour, ITourType } from "@/interfaces/tour.interface";
import { memo, useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import ImageCard from "../ImageCard/ImageCard";
import classes from "./ToursContainer.module.scss";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import TagsSlider from "../TagsSlider/TagsSlider";
import Pagination from "../Pagination/Pagination";
import classNames from "classnames";
import { fetchData } from "@/utils/client-fetch.utils";
import { createQueryParams } from "@/utils/url.utils";

interface ToursContainerProps {
  tours: IPaginatedTours;
  tourTypes?: ITourType[];
  bradcrumbValue?: string;
  showTypes?: boolean;
  title?: string;
}

function ToursContainer(props: ToursContainerProps) {
  const {
    tours,
    tourTypes = [],
    bradcrumbValue = "tours",
    showTypes = true,
    title,
  } = props;
  const { t, i18n } = useTranslation();
  const [activePage, setActivePage] = useState(1);
  const [totalResults, setTotalResults] = useState(tours.total);
  const [hasNextPage, setHasNextPage] = useState(
    tours.total / tours.per_page > tours.current_page
  );
  const [filteredTours, setFilteredTours] = useState<ITour[]>(
    tours.results || []
  );
  const [activeType, setActiveType] = useState<string | null>(null);

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }, [activeType]);

  useEffect(() => {
    if ((activePage > 1 && hasNextPage) || activeType) {
      const query = createQueryParams({
        is_high_interest: showTypes,
        page: activePage,
        tour_category_title: activeType
      });
      fetchData<IPaginatedTours>(`tours${query}`, i18n.language).then(
        (res) => {
          if (!res) return;
          setFilteredTours(res.results);
          setTotalResults(res.total);
          setHasNextPage(res.total / res.per_page > res.current_page);
        }
      );
    }
  }, [activePage, showTypes, i18n, hasNextPage, activeType]);

  const tourEls = filteredTours.map((tour, index) => {
    return <ImageCard item={tour} key={tour.id ?? index} />;
  });

  const types = useMemo(() => {
    if (!showTypes) return [];
    if (tourTypes.length) {
      return tourTypes.map(({ title }) => title);
    }
    return filteredTours.map(({ tour_category_title }) => tour_category_title!);
  }, [tourTypes, tours, showTypes]);

  const totalPages = Math.ceil(totalResults / tours.per_page);

  return (
    <section
      className={classNames(classes.tours, { [classes.withTypes]: showTypes })}
    >
      <div className="container">
        <Breadcrumbs
          items={[
            {
              value: bradcrumbValue as any,
              link: "/tours",
            },
          ]}
        />
        <div className={classes.head}>
          <h1 className="heading heading--1 text--dark text--upc text-overflow">
            {title || t("tours")}
          </h1>
          {showTypes && types.length > 0 && (
            <div className={classes.tags}>
              <TagsSlider
                items={types}
                onClickItem={setActiveType}
                activeItem={activeType || ""}
              />
            </div>
          )}
        </div>
        <div className={classes.list}>{tourEls}</div>
        <div className={classes.pagination}>
          <Pagination
            pagesCount={totalPages}
            activePage={activePage}
            onPageChange={setActivePage}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(ToursContainer);
