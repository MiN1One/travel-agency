import { useGlobalContext } from "@/contexts/GlobalContext";
import { memo } from "react";
import { useTranslation } from "next-i18next";
import Logo from "../Common/Logo";
import classes from './Footer.module.scss';
import { CallCalling, Location, Sms } from "iconsax-react";
import classNames from "classnames";

function Footer() {
  const { headData } = useGlobalContext();
  const { footerData } = headData || {};
  const { t } = useTranslation();

  if (!footerData) return null;

  const linkEls = footerData.links.map((link, index) => {
    return (
      <a 
        key={link.id ?? index} 
        href={link.link}
        className="link"
        title={link.title}
      >
        {link.title}
      </a>
    );
  });

  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.group}>
            <Logo className={classes.logo} />
            <p className={classNames(
              classes.text, 
              "text text--pale-dark text--high"
            )}>
              We will help you to discover for yourself the historical and noteworthy places of ancient and modern Uzbekistan.
            </p>
            <div className={classes.list}>
              <a 
                href={`tel:${footerData?.companyInfo.phoneNumber}`}
                title={t('phoneNumber')!} 
                className={classes.linkItem}
              >
                <span className="link--rounded link--dark">
                  <CallCalling />
                </span>
                <span className={classes.labelGroup}>
                  <span className={classes.label}>
                    {t('telShort')}
                  </span>
                  {footerData?.companyInfo.phoneNumber}
                </span>
              </a>
              <a 
                href={`mailto:${footerData?.companyInfo.email}`}
                title={t('email')!} 
                className={classes.linkItem}
              >
                <span className="link--rounded link--dark">
                  <Sms />
                </span>
                <span className={classes.labelGroup}>
                  <span className={classes.label}>
                    {t('email')}
                  </span>
                  {footerData?.companyInfo.email}
                </span>
              </a>
              <div className={classes.linkItem}>
                <span className="link--rounded link--dark">
                  <Location />
                </span>
                <span className={classes.labelGroup}>
                  <span className={classes.label}>
                    {t('address')}
                  </span>
                  {footerData?.companyInfo.address}
                </span>
              </div>
            </div>
            <div className={classes.listHorizontal}>
              {linkEls}
            </div>
          </div>
          <div className={classes.group}>

          </div>
          <div className={classes.group}>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);