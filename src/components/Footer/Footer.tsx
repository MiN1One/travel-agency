import { useGlobalContext } from "@/contexts/GlobalContext";
import { FormEvent, memo, useCallback, useState } from "react";
import { useTranslation } from "next-i18next";
import Logo from "../Common/Logo";
import classes from "./Footer.module.scss";
import {
  CallCalling,
  Facebook,
  Youtube,
  Instagram,
  Location,
  Whatsapp,
  Sms,
} from "iconsax-react";
import classNames from "classnames";
import { IFooterData } from "@/interfaces/common.interface";
import { TbBrandTelegram } from "react-icons/tb";

const socialMediaIconsMap: Record<
  keyof IFooterData["socialLinks"],
  React.ReactNode
> = {
  facebook: <Facebook />,
  instagram: <Instagram />,
  youtube: <Youtube />,
  whatsapp: <Whatsapp />,
  telegram: <TbBrandTelegram />,
};

function Footer() {
  const { headData } = useGlobalContext();
  const { footerData } = headData || {};
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const onFormValueChange = useCallback(
    (name: keyof typeof form, value: any) => {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  if (!footerData) return null;

  const linkEls = footerData.links.map((link, index) => {
    return (
      <a
        key={link.id ?? index}
        href={link.link}
        className="link text--pale-dark"
        title={link.title}
      >
        {link.title}
      </a>
    );
  });

  const socialMediaLinkEls = Object.keys(footerData.socialLinks).map(
    (key, index) => {
      const link = footerData.socialLinks[key as keyof IFooterData['socialLinks']];
      const icon = socialMediaIconsMap[key as keyof IFooterData['socialLinks']];
      return icon && (
        <a
          href={link}
          title={t(key)!}
          key={index}
          className="link--rounded link--dark"
        >
          {icon}
        </a>
      );
    }
  );

  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.group}>
            <Logo className={classes.logo} />
            <p
              className={classNames(
                classes.text,
                "text text--pale-dark text--high"
              )}
            >
              We will help you to discover for yourself the historical and
              noteworthy places of ancient and modern Uzbekistan.
            </p>
            <div className={classes.list}>
              <a
                href={`tel:${footerData?.companyInfo.phoneNumber}`}
                title={t("phoneNumber")!}
                className={classes.linkItem}
              >
                <span className="link--rounded link--dark">
                  <CallCalling />
                </span>
                <span className={classes.labelGroup}>
                  <span className={classes.label}>{t("telShort")}</span>
                  {footerData?.companyInfo.phoneNumber}
                </span>
              </a>
              <a
                href={`mailto:${footerData?.companyInfo.email}`}
                title={t("email")!}
                className={classes.linkItem}
              >
                <span className="link--rounded link--dark">
                  <Sms />
                </span>
                <span className={classes.labelGroup}>
                  <span className={classes.label}>{t("email")}</span>
                  {footerData?.companyInfo.email}
                </span>
              </a>
              <div className={classes.linkItem}>
                <span className="link--rounded link--dark">
                  <Location />
                </span>
                <span className={classes.labelGroup}>
                  <span className={classes.label}>{t("address")}</span>
                  {footerData?.companyInfo.address}
                </span>
              </div>
            </div>
            <div className={classes.listHorizontal}>
              {linkEls}
            </div>
          </div>
          <div className={classes.formWrapper}>
            <div className={classes.titleGroup}>
              <h6 className="heading heading--6 text--high">
                {t("contactUs")}
              </h6>
              <p className="text text--pale-dark text--high">{t("respond")}</p>
            </div>
            <form onSubmit={onSubmitForm} className={classes.form}>
              <input
                className="input"
                value={form.name}
                placeholder={t("name")!}
                onChange={(e) => onFormValueChange("name", e.target.value)}
              />
              <input
                className="input"
                value={form.email}
                placeholder={t("email")!}
                onChange={(e) => onFormValueChange("email", e.target.value)}
              />
              <textarea
                className="input"
                value={form.message}
                placeholder={t("message")!}
                onChange={(e) => onFormValueChange("message", e.target.value)}
              />
              <button className="btn btn--green btn--fullWidth btn--regular btn--reverse">
                {t("submit")}
              </button>
            </form>
          </div>
          <div className={classes.group}>
            <div className={classes.titleGroup}>
              <h6 className="heading heading--6 text--high">
                {t("socialMedia")}
              </h6>
              <p className="text text--pale-dark text--high">
                {t("beTheFirst")}
              </p>
            </div>
            <div className={classes.socialLinks}>
              {socialMediaLinkEls}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
