import { memo } from "react";
import { useTranslation } from "next-i18next";
import classes from './Countries.module.scss';

interface CountriesProps {
  countries: string[];
}

function Countries({ countries }: CountriesProps) {
  const { t } = useTranslation();

  const countryEls = countries.map((country, index) => {
    return (
      <li 
        key={index}
        aria-label={t('countryImage')!} 
        className={classes.item}
      >
        <figure>
          <img
            alt={t('countryImage')!}
            src={country}
            width="100%"
            height="100%"
          />
        </figure>
      </li>
    );
  });

  return (
    <section className={classes.countries}>
      <div className="container">
        <div className={classes.content}>
          <h3 className={classes.heading}>
            {t('countries')}
          </h3> 
          <ul className={classes.list}>
            {countryEls}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default memo(Countries);